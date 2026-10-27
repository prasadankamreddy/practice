num1 = int(input('Enter a number : '))
operator = input('Enter a operator')
num2 = int(input('Enter a number : '))

if operator == '+':
    print('Answer : ', num1 + num2)

elif operator == "-":
    print('Answer : ', num1-num2)

elif operator == "*":
    print('Answer : ', num1*num2)

elif operator == "/":
    if num2 == 0:
        print('Zero division value')
    else:
        print('Answer : ', num1/num2)
    

else:
    print('Invalid operater')