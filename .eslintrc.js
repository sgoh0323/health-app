module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'react-hooks'],
    rules: {
        'no-unused-vars': 'off',
        'import/no-unresolved': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'no-use-before-define': [0],
        'no-param-reassign': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'react/jsx-props-no-spreading': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        '@typescript-eslint/no-use-before-define': [1],
        'no-restricted-syntax': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'] }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/extensions': ['off'],
        'react/prop-types': 'off',
        'react/no-unused-prop-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    },
    extends: [
        'prettier',
        'airbnb',
        'airbnb/hooks',
        'prettier/react',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    settings: { 'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'] } } }
};
