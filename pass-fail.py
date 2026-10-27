marks = int(input('Enter your marks : '))

if marks < 0 or marks > 100:
    print('invalid marks')

elif marks >= 35 :
    print('you are pass this test')


else:

    print('you are fail')