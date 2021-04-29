import log, { LogLevelDesc, getLevel, setLevel } from "loglevel";

const logDataEnabled = true;

enum LogLevel {
  TRACE = 0,
  DEBUG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4,
  SILENT = 5,
}

function getTime(): string {
  const date = new Date();
  return date.toLocaleTimeString() + ":" + date.getMilliseconds();
}

function getMessage(type: string, location: string, message: string): string {
  const time = getTime();
  const logMessage = time + " " + type + " " + location + "::" + message;

  if (logDataEnabled) {
    if (!(window as any).logData) {
      initLogging();
    }

    (window as any).logData.unshift({
      time: time,
      type: type,
      location: location,
      message: message,
    });
  }

  return logMessage;
}

export function initLogging(): void {
  (window as any).logData = [];
}

export function getLog() {
  return (window as any).logData;
}

export function getLoggingLevel(): number {
  return getLevel();
}

export function setLoggingLevel(level: LogLevelDesc): void {
  setLevel(level);
}

export function logError(location: string, message: string): void {
  log.error(getMessage("Error", location, message));
}

export function logWarning(location: string, message: string): void {
  if (getLoggingLevel() <= LogLevel.WARN) {
    log.warn(getMessage("Warning", location, message));
  }
}

export function logInfo(location: string, message: string): void {
  if (getLoggingLevel() <= LogLevel.INFO) {
    log.info(getMessage("Info", location, message));
  }
}

export function logDebug(location: string, message: string): void {
  if (getLoggingLevel() <= LogLevel.DEBUG) {
    log.debug(getMessage("Debug", location, message));
  }
}

export function logTrace(location: string, message: string): void {
  if (getLoggingLevel() <= LogLevel.TRACE) {
    log.trace(getMessage("Trace", location, message));
  }
}
