num1 = int(input('Enter a number : '))
operator = input('Enter a operator : ')
num2 = int(input('Enter a number : '))

if operator == '+':
    print('this is positive value', num1 + num2)

elif operator == "-":
    print('this is negitive value ', num1 - num2)

else:
    print('enter a valid number')