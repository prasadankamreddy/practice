a = int(input('Enter Maths marks : '))
b = int(input('Enter Computers marks : '))
c = int(input('Enter Science marks : '))


if a<0 or a>100:
    print(a, "Invalid Marks")

elif a >= 90:
    print(a, "A")

elif a >= 75:
    print(a, "B")

elif a >=40 :
    print(a, "D")

else:
    print(a, 'Fail')



if b<0 or b>100:
    print(b, "Invalid Marks")

elif b >= 90:
    print(b, "A")

elif b >= 75:
    print(b, "B")

elif b >=40 :
    print(b, "D")

else:
    print(b, 'Fail')



if c<0 or c>100:
    print(c, "Invalid Marks")

elif c >= 90:
    print(c, "A")

elif c >= 75:
    print(c, "B")

elif c >=40 :
    print(c, "D")

else:
    print(c, 'Fail')