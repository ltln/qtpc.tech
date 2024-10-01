---
title: A website by LT
excerpt: Built using Next.js, TailwindCSS, ExpressJS, Shacdn
coverImage: /sequoia-morning.jpg
date: 1727750704
author:
  name: Ty Nguyen Loc
  url: https://github.com/ltln
ogImage:
  url: /sequoia-morning.jpg
---

Built using Next.js, TailwindCSS, ExpressJS, Shacdn

Here is random string generator in C++
```cpp
#include <iostream>
#include <string>
#include <time.h>
#include <stdlib.h>

using namespace std;

string random(int len)
{
	string a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	string r;
	srand(time(NULL));
	for(int i = 0; i < len; i++) r.push_back(a.at(size_t(rand() % 62)));
	return r;
}

int main()
{
	cout << random(32) << endl;
	cin.get();
	return 0;
}
```