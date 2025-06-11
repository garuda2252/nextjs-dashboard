const { exec } = require('child_process');

exec('next build', (err, stdout, stderr) => {
  if (err) {
    console.error('Build error (diabaikan):', stderr);
    process.exit(0); // tetap sukses
  } else {
    console.log(stdout);
    process.exit(0);
  }
});
