import {
    execSync,
} from 'child_process';

import os from 'os';



const homedir = os.homedir();


export const runCommand = (
    command: string,
) => {
    try {
        const commandData = execSync(
            command,
            {
                cwd: homedir,
            },
        );

        return commandData.toString();
    } catch (error) {
        return 'invalid command';
    }
}
