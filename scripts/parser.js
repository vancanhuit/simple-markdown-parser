function SimpleMarkdown() {
    this.rules = [
        {
            regex: /(\*)(.*)\1/g,
            replacement: '<strong>$2</strong>'
        },
        {
            regex: /(_)(.*)\1/g,
            replacement: '<em>$2</em>' 
        },
        {
            regex: /(\^)(.*)\1/g,
            replacement: '<sup>$2</sup>'
        },
        {
            regex: /(~)(.*)\1/g,
            replacement: '<sub>$2</sub>'
        },
        {
            regex: /(-)(.*)\1/g,
            replacement: '<del>$2</del>'
        },
        {
            regex: /(\+)(.*)\1/g,
            replacement: '<ins>$2</ins>'
        },
        {
            regex: /(\?\?)(.*)\1/g,
            replacement: '<cite>&mdash; $2</cite>'
        },
        {
            regex: /(bq\.\s*)(.*)/g,
            replacement: '<blockquote>$2</blockquote>'
        },
        {
            regex: /{{(.*)}}/g,
            replacement: '<code>$1</code>'
        }
    ];

    this.render = function(text) {
        text = '\n' + text + '\n';
        this.rules.forEach(function(rule) {
            text = text.replace(rule.regex, rule.replacement);
        });

        return text.trim();
    }
}