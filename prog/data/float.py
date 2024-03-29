import numpy as np

def print_float(a_number):
    a_float = np.float32(a_number)
    b_repr = format(int.from_bytes(a_float.data.tobytes(), 'little'), '032b')
    print(b_repr)
    sig, exp, man = b_repr[0], b_repr[1:9], '1' + b_repr[9:]
    print(sig, exp, man)
    int_exp = int(exp, 2) - 127
    if int_exp > 0:
        print(sig, int_exp,
              str(int(man[:int_exp + 1], 2)) + '.' +str(int(man[int_exp + 1:])))
    