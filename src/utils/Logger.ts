import log, { LogLevelDesc, getLevel, setLevel } from "loglevel";

function getTime(): string {
  const date = new Date();
  return date.toLocaleTimeString() + ":" + date.getMilliseconds();
}

function getMessage(type: string, location: string, message: string): string {
  const time = getTime();
  const logMessage = time + " " + type + " " + location + "::" + message;

  if ((window as any).logData) {
    (window as any).logData.push({
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
  log.error(getMessage("ERROR", location, message));
}

export function logWarning(location: string, message: string): void {
  log.warn(getMessage("WARNING", location, message));
}

export function logInfo(location: string, message: string): void {
  log.info(getMessage("INFO", location, message));
}

export function logDebug(location: string, message: string): void {
  log.debug(getMessage("DEBUG", location, message));
}

export function logTrace(location: string, message: string): void {
  log.trace(getMessage("TRACE", location, message));
}
