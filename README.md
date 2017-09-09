# Simple Markdown Parser

This markdown parser will render text written in my own markdown syntax to raw HTML.

Basic rules:

- `*strong*` -> `<strong>strong</strong>`
- `_emphasize_` -> `<em>emphasize</em>`
- `^superscript^` -> `<sup>superscript</sup>`
- `~subscript~` -> `<sub>subscript</sub>`
- `-deleted-` -> `<del>deleted</del>`
- `+inserted+`-> `<ins>inserted</ins>`
- `??cite??` -> `<cite>&mdash; cite</cite>`
- `bq. This is an inline block quote` -> `<blockquote>This is an inline block quote</blockquote>`
- `{{code}}` -> `<code>code</code>`
- `{quote} This is also a block quote {quote}` ->

```text
<blockquote>
  <p>This is also a block quote</p>
</blockquote>
```

- `{color:red} This is a red text {color}` -> `<p style="color:red">This is a red text</p>`
