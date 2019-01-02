function echo<T> (value : T) : T {
    return value;
}

// the above function uses generics
// it takes in a value of type T and return a value of type T

// the num var gets implicitly marked as number
var num = echo(1);

// the str var gets implicitly marked as string
var str = echo("Hi");

// explicitly marking as string
var str : string = echo("Hi");