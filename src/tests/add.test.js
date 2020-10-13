const add=(a,b)=> a+b;
const generateGreeting = (name='Anonyomus')=> `Hello ${name}!!`

test('should add 2 numbers', ()=>{
    const result= add(3,4);
    expect(result).toBe(7)
});

test('should return greeting', ()=>{
    const result= generateGreeting('Richerd');
    expect(result).toBe('Hello Richerd!!')
});

test('should return greeting for no name', ()=>{
    const result= generateGreeting();
    expect(result).toBe('Hello Anonyomus!!')
});