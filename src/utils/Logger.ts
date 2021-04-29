import log, { LogLevelDesc, getLevel, setLevel } from "loglevel";

function getTime(): string {
  const date = new Date();
  return (
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds() +
    ":" +
    date.getMilliseconds()
  );
}

function getMessage(type: string, message: string): string {
  return getTime() + " " + type + " " + message;
}

export function getLoggingLevel(): number {
  return getLevel();
}

export function setLoggingLevel(level: LogLevelDesc): void {
  setLevel(level);
}

export function logError(message: string): void {
  log.error(getMessage("ERROR", message));
}

export function logWarning(message: string): void {
  log.warn(getMessage("WARNING", message));
}

export function logInfo(message: string): void {
  log.info(getMessage("INFO", message));
}

export function logDebug(message: string): void {
  log.debug(getMessage("DEBUG", message));
}

export function logTrace(message: string): void {
  log.trace(getMessage("TRACE", message));
}
