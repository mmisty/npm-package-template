import { CustomConsole, LogMessage, LogType } from '@jest/console';

export const dateStr = () => {
  const date = new Date(Date.now());

  return `${date.getUTCHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
};

function simpleFormatter(type: LogType, message: LogMessage): string {
  const TITLE_INDENT = '    ';
  const CONSOLE_INDENT = `${TITLE_INDENT}  `;
  const date = dateStr();

  return message
    .split(/\n/)
    .map(line => `${type} ${date}${CONSOLE_INDENT}${line}`)
    .join('\n');
}

if (process.env.CONSOLE === 'true' || !process.env.CONSOLE) {
  (global as unknown as { console: CustomConsole }).console = new CustomConsole(
    process.stdout,
    process.stderr,
    simpleFormatter,
  );
} else {
  const dismisLogMethods = ['log', 'warn', 'error', 'debug', 'info'] as const;
  type LogLevel = (typeof dismisLogMethods)[number];
  Object.keys(console).forEach(m => {
    if (dismisLogMethods.indexOf(m as LogLevel) !== -1) {
      jest.spyOn(console, m as any).mockImplementation();
    }
  });
}
