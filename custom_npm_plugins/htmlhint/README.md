# Custom Version of htmlhint

Everything is the same except for the generated version of lib/htmlhint.js file
This is copied from htmlhint - https://github.com/inspiraller/HTMLHint
The extra features this provies over the original htmlhint is it checks on the following:
- If a developer multiple classes on a html element and those classes have the same properties declared.
- It is allowed if the developer has conformed to a naming convention - BEM, ie .button .button--override, 

# To use
Ensure you add a .htmlhintrc file to your project and provide a reference to your generated css file as follows
Provide a regex for all classes that you also want to allow multiple properties declared.

```javascript
{
    "tag-pair": true,
    "multiple-classes-same-property":"strStylesPaths=C:\\projects\\demos\\demo201612-1\\www\\dist\\css\\;strRegExcludeClasses=(\\.gr\\-1|\\.gr\\-2)+;isExcludeBemModifier=true;",
    "id-unique":false,
    "attr-value-double-quotes":false,
    "title-require":false,
    "special-char-escape":false
}

```