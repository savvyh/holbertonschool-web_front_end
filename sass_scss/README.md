# Sass & Scss

## Description :dart:
This project aims to master the fundamental concepts of Sass/SCSS to enhance CSS writing and maintenance. It covers essential Sass features, from basic syntax to advanced functionalities.

## Basics 🏁
Sass ⚡ Scss
| Feature         | Sass                                      | SCSS                          |
|:---------------|:------------------------------------------|:------------------------------|
| Syntax         | Uses indentation instead of braces        | Uses braces and semicolons    |
| File Extension | .sass                                     | .scss                         |
| Compatibility  | Not compatible with CSS                   | Fully compatible with CSS     |
| Popularity     | Less popular                             | More popular                  |
| Nesting       | Based on indentation                      | Based on brackets             |
| Learning Curve | Steeper due to unique syntax             | Easier for CSS developers     |


How to ?
| How to ...          | Example                                                    |
|:----------------|:-----------------------------------------------------------------|
| Create Variable | `$primary-color: #f9f9f9;`                                        |
| File Import     | `@import 'file1';`                                                |
| While Loop      | ```scss
                    $i: 0;
                    @while $i < 5 {
                      .element-#{$i} {
                        width: 20px * $i;
                      }
                      $i: $i + 1;
                    }
                    ``` |
| Each Loop       | ```scss
                    @each $animal in cat, dog, fish {
                      .#{$animal}-icon {
                        background: url('#{$animal}.png');
                      }
                    }
                    ``` |
| Function        | ```scss
                    @function power($base, $exponent) {
                      $result: 1;
                      @for $_ from 1 through $exponent {
                        $result: $result * $base;
                      }
                      @return $result;
                    }
                    ``` |

## Tasks 🚀
13 tasks for this project :

0. Always debugging!
1. Color variable
2. Colors
3. Nested tag
4. Nested class
5. Nested child
6. Nested hover
7. Nested and nested again
8. Margin mixin
9. Extended
10. Import colors
11. For each
12. Loop Headers
