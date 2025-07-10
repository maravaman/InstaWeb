word = input("Enter a word: ")
reversed_word = ''.join(reversed(word))

print("Reversed word:", reversed_word)

if word == reversed_word:
    print("This is a palindrome!")
else:
    print("This is not a palindrome.")
