// https://www.codewars.com/kata/be-concise-i-the-ternary-operator/train/javascript

function describeAge(age){
return"You're a(n) "+(age<=12?"kid":age<=17?"teenager":age<=64?"adult":"elderly")
}

//another method would be to use templating for this
