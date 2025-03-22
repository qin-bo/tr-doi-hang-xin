nhanviena =  int(input("nhap vao so diem cua nhan vien a:"))
nhanvienb =  int(input("nhap vao so diem cua nhan vien b:"))
nhanvienc =  int(input("nhap vao so diem cua nhan vien c:"))
nhanviend= int(input("nhap vao so diem cua nhan vien d:"))
if nhanviena < nhanvienb or nhanviena < nhanvienc or nhanviena < nhanviend:
    print(nhanviena * 4)
elif nhanvienb < nhanviena or nhanvienb < nhanvienc or nhanvienb < nhanviend:
    print(nhanvienb * 4)
elif nhanvienc < nhanviena or nhanvienc < nhanviena or nhanvienc < nhanviend:
    print(nhanvienc * 4)
elif nhanviend < nhanviena or nhanviend < nhanvienb or nhanviend < nhanvienc:
    print(nhanviend * 4)
