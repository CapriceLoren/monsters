# Complete React Developer in 2023 (w/ Redux, Hooks, GraphQL)
### come back to section 2 after finishing course

- declarative
  - set state and react updates
  - less expensive than dom manipulation
  - creates virtualDOM, or js dom

- unidirectional data flow
  - when state changes, the dom passes that information down
  - state cannot pass information up dom
  - makes it easier to debug code
    - go to where state/component changes

- npx
  - package inside npm
  - downloads latest package, runs immediately, and deletes

- manifest.json
  - allows for downloading progressive web app
  - use on desktop instead of browser

- classes vs hooks
  - hooks are react specific, newer
  - classes are ubiquitious, older

  ## Array Methods
  - .map is more efficient than a for loop, and gives you a new array back

  ```
  const myArray = [1, 2, 3, 4]
  myArray.map(element => element + 1)
  ```
  returns [2, 3, 4, 5]