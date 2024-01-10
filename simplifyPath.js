// simplify an absolute file path by removing unnecessary ".." and "." components.
// 1. Split the input string into an array using the '/' character as the delimiter. This will give you an array where each element represents a directory or file in the path.
// 2. Initialize an empty stack. The stack will be used to keep track of the directories in the path.
// 3. Iterate over the array of directories. For each directory:
// * If the directory is '..', pop the last directory from the stack (if there is one).
// * If the directory is '.', ignore it.
// * Otherwise, push the directory onto the stack.
// 4. After iterating over all the directories, join the directories in the stack back together into a single string using the '/' character as the delimiter. This will give you the simplified path.

var simplifyPath = function(path) {
    var stack = [];
    var parts = path.split('/');
    
    for (var i = 0; i < parts.length; i++) {
        if (parts[i] === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else if (parts[i] !== '' && parts[i] !== '.') {
            stack.push(parts[i]);
        }
    }
    
    return '/' + stack.join('/');
 };
//  This function works by treating the path as a sequence of directories and files, and then building up the simplified path by only keeping the necessary directories. 
//It handles '.' and '..' correctly, and ignores any empty strings that result from splitting the path on '/'.