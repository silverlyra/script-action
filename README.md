# script-action

An alternative to the official [github-script action][ghs], with some additional features.

[ghs]: https://github.com/actions/github-script#readme

## Usage

See [action.yml](action.yml).

<!-- start usage -->
```yaml
- uses: silverlyra/script-action@v0.2
  with:
    # JavaScript source to run (or a script filename)
    script: >
      console.log("Hello, world!");

    # Input data to pass into your script
    input: 'null'

    # If "json", `input` will be parsed as JSON.
    # If "string", your script will see the literal string value of `input`.
    input-encoding: 'json'

    # If "json", the script's return value will be JSON-encoded.
    # If "string", the script's return value will be output as a string.
    result-encoding: 'json'

    # Directory to change into
    cwd: '.'

    github-token: ${{ github.token }}
```
<!-- end usage -->

## Script

The JavaScript passed as the `script` input will have the following values predefined:

- `input`: The `input` passed to the action, via `with:`
- `env`: An object containing all environment variables (`process.env`)

Scripts also have access to some helper functions:

- `fetch`: The _fetch_ function
- `readEvent`: Read the GitHub event JSON file off of disk; return the event `name` and its `data`
- `shell`: Spawn a process and (optionally) capture its output

These packages are also available:

- `fs`: The Node.js _fs/promises_ module
- `path`: The Node.js _path_ module
- `artifact`: The _@actions/artifact_ NPM package
- `chalk`: The _chalk_ NPM package
- `core`: The _@actions/core_ NPM package
- `exec`: The _@actions/exec_ NPM package
- `glob`: The _@actions/glob_ NPM package
- `io`: The _@actions/io_ NPM package
