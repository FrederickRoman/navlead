/**
 * Pause (sleep) the execution of its containing async function
 * @param time - sleeping time in ms
 * @returns Promise<void>
 * 
 * @example
 * // before sleep
 * await sleep(500)
 * // after sleep
 */
function sleep(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default sleep;
