const { exec } = require(`child_process`);

const runCommand = command => {
  const child = exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  });
  child.stdout.on(`data`, data => console.log(data));
};

export default runCommand;
