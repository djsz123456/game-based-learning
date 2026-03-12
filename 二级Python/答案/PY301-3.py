# 以下代码为提示框架
# 请在...处使用一行或多行代码替换
#
# 注意：提示框架代码可以任意修改，以完成程序功能为准
fi=open("小女孩.txt","r")
fo = open("小女孩-频次排序.txt","w")
s=fi.read()
fi.close()
d = {}
exclude=' \n'
for i in s:
    if i not in exclude:
        d[i]=d.get(i,0)+1
ls = list(d.items())
ls.sort(key=lambda x:x[1], reverse=True) # 此行可以按照词频由高到低排序
for i in range(len(ls)):
    ls[i]="{}:{}".format(ls[i][0],ls[i][1])

fo.write(",".join(ls))
fo.close()
