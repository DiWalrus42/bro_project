'''
    Ceasar Cipher
    --------------
    C = cipher Text, ==> C = d(P) = (p+k) mod 26, where
    c = each character in cipher text,
    P = plain text, ==> P = d(C) = (c-k) mod 26, (if c-k is negative, then add 26), where
    p = each character in plain text,
    e = encrypt function(),
    d = decrypt function(),
    k = shift used
'''
def encrypt(P, k):
    C = ""
    for p in P:
        if (p.isalpha()): # check if character is alphabetic
            offset = 65 if p.isupper() else 97 # Use an ascii offset of 65 if Uppercase; else use 97
            C += chr(((((ord(p) + offset) + k) % 26) + offset)) # C = e(P) = (p+k) mod 26 
        else:
            C += p
    return C

def decrypt(C, k):
    P = ""
    for c in C:
        if (c.isalpha()):
            offset = 65 if c.isupper() else 97
            # P = d(C) = (c-k) mod 26, (if c-k is negative, then add 26)
            shifted = (((ord(c) + offset) - k))
            if (shifted < 0):
                P += chr((shifted + 26) + offset)
            else:
                P += chr((shifted % 26) + offset)
        else:
            P += c
    return P

if __name__ == '__main__':
    plain = "I CAME I SAW I CONQUERED"
    shift = 3
    # plain = "STIKOM"
    # shift = 20
    cipher = encrypt(plain, shift)
    print(f"Original Text  : {plain}")
    print(f"Encrypted Text : {cipher}")
    print(f"Decrypted Text : {decrypt(cipher, shift)}")