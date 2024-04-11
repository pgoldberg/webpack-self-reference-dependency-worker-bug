exports.FOO = "foo";
function foo() {
    console.log(exports.FOO);
}
exports.foo = foo;
