/* eslint-disable no-console */
import loglevel, { setLevel, levels } from "loglevel";
import { logError, logWarning, logInfo } from "./Logger";

test("logError", () => {
  setLevel(levels.ERROR);
  const logSpy = jest.spyOn(loglevel, "log");
  logError("hello error");
  expect(logSpy).toHaveBeenCalled();
});

test("logWarning", () => {
  setLevel(levels.WARN);
  const logSpy = jest.spyOn(loglevel, "log");
  logWarning("hello warning");
  expect(logSpy).toHaveBeenCalled();
});

test("logInfo", () => {
  setLevel(levels.INFO);
  const logSpy = jest.spyOn(loglevel, "log");
  logInfo("hello info");
  expect(logSpy).toHaveBeenCalled();
});
