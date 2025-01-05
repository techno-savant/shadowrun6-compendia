const fs = require('fs-extra');
const path = require('path');
const del = import('del'); //es6m
const chalk = require('chalk');

async function linkUserData() {
    const config = fs.readJSONSync('foundryconfig.json');
    const projectConfig = fs.readJSONSync(path.resolve('.', 'module.json'));

    let name = projectConfig.id;
    try {
        let linkDir;
        if (config.dataPath) {
            if (!fs.existsSync(path.join(config.dataPath, 'Data')))
                throw Error('User Data path invalid, no Data directory found');

            console.log(config.dataPath);
            linkDir = path.join(config.dataPath, 'Data', 'modules', name);
        } else {
            throw Error('No User Data path defined in foundryconfig.json');
        }

        if (fs.existsSync(linkDir)) {
            if (!fs.statSync(linkDir).isSymbolicLink())
                throw Error(`${chalk.blue(linkDir)} is not a link. Please delete or rename folder then run ${chalk.green('link')} command again`);
        } else {
            console.log(
                chalk.green(`Linking build to ${chalk.blue(linkDir)}`)
            );
            await fs.symlink(path.resolve('./'), linkDir);
        }
        return Promise.resolve();
    } catch (err) {
        Promise.reject(err);
    }
}

exports.link = linkUserData;
