# *** JavaScript Interview Practice Questions ***
## Author: Tej Poudel

## Description:
This is JavaScript Interview Questions collection. The questions are solved in different possible logics. 

#### 1. What is a potential pitfall with using `typeof bar == "object"` to determine if `bar` is an object? How can this pitfall be avoided?
To be Answered...
#### 2. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?
This is an increasingly common practice, employed by many popular Javascript libraries (Node JS, jQuery etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.
#### 3. What will be answer of the following two logs?
`console.log(2 + '2');` Answer 22
`console.log(2 - '2');` Answer 0 (-) converts '2' into number.
