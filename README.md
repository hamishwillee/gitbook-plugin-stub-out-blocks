# gitbook-plugin-stub-out-blocks

Stubs out plugins that prevent me building/testing on Windows. This is a pain for testing - for example, say I want to run validate-links, which only works on Windows for me currently. 

Specifically this plugin provides an empty implementation of specific tags, so that I can build everything else (for testing).

## Usage

Add below to the plugins. Use a preceding minus (e.g. "-stub-..." to disable)

```
"stub-out-blocks@git+https://github.com/hamishwillee/gitbook-plugin-stub-out-blocks.git"
```
        
## Stubbed tags

Current tags stubbed out:

* mermaid


