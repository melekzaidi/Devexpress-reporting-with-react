export const readFileContent = (filePath:string) =>
    new Promise((resolve, reject) => {
      fetch(filePath)
        .then((response) => response.text())
        .then((content) => resolve(content))
        .catch((error) => reject(error));
    });
  
export async function getApiUrlReporting(): Promise<string> {
    const fileContent = await readFileContent(`/connectionreporting.txt`);
  
    if (typeof fileContent === 'string') {
      const [ipAddress, port] = fileContent.split(';');
      return `http://${ipAddress}:${port}/`;
    }
    throw new Error('File content is not a string');
  }
  