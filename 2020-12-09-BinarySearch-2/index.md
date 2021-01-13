---
title: "Capabilities of Binary Search Algorithm: Part-2"
path: blog/binary-search-2
tags: [algorithms, dsa, binary-search]
cover: ./cover.png
date: 2020-12-09
excerpt: More than just a Searching Algorithm

---

Before starting this article, I want to take a 
moment to thank you guys for so much loving and support to the first part of this article, I got an amazing response on that and many people texted me saying it was amazing and they are eagerly waiting for the second part.

So yes, your wait is over, and let's get started!

---

### Let’s recapitulate what all we have covered —

So last weekend, I released the first part of the article, “Capabilities of Binary Search Algorithm: Part-1” in which I introduced you with the famous searching algorithm known as Binary Search Algorithm. We also discussed how it mas be modified a little bit to do many things other than just searching.


We have `already discussed` some hidden capabilities of Binary Search Algorithm. Here is a list of the same : —

* Searching in Reversed Sorted Array.
* Finding First and Last Occurance an Element.
* Finding Floor and Ceil of an Element.
* Finding the peak of an array.

*If you want to read the full article, here’s the link —*

[`Capabilities of Binary Search Algorithm: Part-1`](https://medium.com/swlh/capabilities-of-binary-search-algorithm-part-1-29163d9ec8f)


### In this article we’ll be discussing the following : —

* Finding Square Root of a number.
* Number of times a Sorted array is rotated.
* Searching in Nearly Sorted Array.
* Finding a position on an Element in an infinite array.
* Searching in Bitonic Infinite Array.
* Searching in 2-D Array.

---

## 5. Finding Square Root of a number.

Here we’ll be finding power and square root of a number using Binary Search Algorithm.

`Approach`


For finding Square root of a number, we will keep start at 0 and end at n/2. Check if `mid² == no`, if yes, we found the element. else we will manipulate the start and end index accordingly

```cpp
/*!
* Copyright (c) 2020 Abhishek Srivastava
*/

/*
 For demstration of concept we are using
 int variable. But ideally we will prefer using 
 double value with an Epison error estimation. 
*/

#include <bits/stdc++.h>
using namespace std;
#define ll long long int

int getSquareRoot(int n, int start, int end) {
  if (start > end)
        return -1;
  int mid = start + (end-start)/2;
  if(mid*mid == n){
    return mid;
  } else if(mid*mid > n) {
    getSquareRoot(n, start, end-1);
  } else getSquareRoot(n ,start+1, end);
}

int main(){

  ios :: sync_with_stdio(false);
  cin.tie(0);

  int n; cin >> n;
  cout << getSquareRoot(n, 0, n/2);
  return 0;
}
```

---

## 6. Number of times a Sorted array is rotated.
In this problem, you’ll be provided with an unsorted array and you need to count how many times a Sorted array is rotated.

`Approach`

*Finding index of the element which is greater than prev.*

```cpp
/*!
* Copyright (c) 2020 Abhishek Srivastava
*/

#include <bits/stdc++.h>
using namespace std;
#define ll long long int


int countRotations(int arr[], int low, int high)
{
    if (high < low)
        return 0;

    if (high == low)
        return low;

    int mid = low + (high - low) / 2; 

    // Spotting Changes
    // Check if element (mid+1) is minimum element.
    if (mid < high && arr[mid + 1] < arr[mid])
        return (mid + 1);
    // Check if mid itself is minimum element
    if (mid > low && arr[mid] < arr[mid - 1])
        return mid;

    if (arr[high] > arr[mid])
        return countRotations(arr, low, mid - 1);

    return countRotations(arr, mid + 1, high);
}

int main()
{
    int arr[] = {15, 18, 2, 3, 6, 12};
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << countRotations(arr, 0, n - 1);
    return 0;
}
```

---

## 7. Searching in Nearly Sorted Array.

Here you’ll be provided with a nearly sorted array with shuffling up to 2 elements. You need to search element at an index in this suffered array. Here is an 
example:-

array => `{1, 3, 2, 4, 6, 5, 7, 9, 8, 10}`
index of 6 = 5

`Approach`

Normally we compare with the adjacent element, ie, `mid+1` and `mid-1` but in this case, we’ll search on `mid+1` , `mid+2`, `mid-1`, `mid-2` .

```cpp
/*!
* Copyright (c) 2020 Abhishek Srivastava
*/

#include <bits/stdc++.h>
using namespace std;
#define ll long long int

int main(){

    ios :: sync_with_stdio(false);
    cin.tie(0);

    vector<int> a = {1, 3, 2, 4, 6, 5, 7, 9, 8, 10};
    int ele = 1;

    int s=0, e=a.size()-1, mid;
    while(s <= e){
        mid = s+(e-s)/2;
        if(a[mid] == ele){
            cout << mid;
            break;
        }
        if(mid-2 >= 0){
            if(a[mid-2] == ele){
                cout << mid-2;
                break;
            }
        }
        if(mid+2 <= a.size()-1){
            if(a[mid+2] == ele){
                cout << mid+2;
                break;
            }
        }

        if(a[mid] <= ele){
            s = mid+1;
        } else {
            e = mid-1;
        }
    }

    return 0;
}
```

---

## 8. Finding a position on an Element in an infinite array

In this question, you are given an infinite array and you are expected to search an element in the same.

Problem: You can’t take `high` as `length-1`

`Approach`

Here we’ll initially take high as 1 and increment it in an exponential order.

```cpp
/*!
* Copyright (c) 2020 Abhishek Srivastava
*/

#include <bits/stdc++.h>
using namespace std;
#define ll long long int

int binaryPlay(vector<int> a, int l, int h, int key){
    while(l<=h){
        int mid = l + (h-l)/2;
        if(a[mid] == key){
            return mid;
        } else if(a[mid] < key){
            l = mid+1;
        } else {
            h = mid-1;
        }
    }
    return -1;
}

int main(){

    ios :: sync_with_stdio(false);
    cin.tie(0);

    vector<int> inf = {1, 2, 3, 4, 5, 6, 7 ,8 , 9, 10};
    int key = 4;

    int l = 0, h = 1, mid;
    while(inf[h] < key){
        h = h*2;
    }
    // cout << h << "\t";
    cout << binaryPlay(inf, l, h, key);
    return 0;
}
```

---

## 9. Searching in Bitonic infinite Array.

A Bitonic array is an array which only contains 0’s and 1’s. You are provided with an infinite array which contains only 0’s and 1’s. You need to find first 
Occurance of 1 in this array.

`Approach`

*Go through the approach of finding first Occurance discussed before and the Bitonic Array approach.*

```cpp
/*!
* Copyright (c) 2020 Abhishek Srivastava
*/

#include <bits/stdc++.h>
using namespace std;
#define ll long long int

int main(){

    ios :: sync_with_stdio(false);
    cin.tie(0);

    vector<int> bInf = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1};

    int l=0, h=1, mid;
    while(bInf[h] < 1){
        h *= 2;
    }

    int firstOccr;
    while(l <= h) {
        mid = l+(h-l)/2;
        if(bInf[mid] == 1){
            firstOccr = mid;
            h = mid-1;
        }
        else if (bInf[mid] < 1){
            l = mid + 1;
        } else {
            h = mid-1;
        }
    }

    cout << firstOccr;

    return 0;
}
```

---

## 10. Searching in 2-D Array

Search An element in 2-D Matrix

`Structure:`


{10, 20, 30, 40},
{15, 25, 35, 96},
{17, 29, 37, 98},
{32, 33, 39, 50}

Largest element at bottom right and smallest at Top left.

`Approach`


Based on monotonicity of number in the array, we’ll design the conditions of the loop. We’ll start with `(0, column)` and move accordingly.

```cpp
/*!
* Copyright (c) 2020 Abhishek Srivastava
*/

#include <bits/stdc++.h>
using namespace std;
#define ll long long int

int main(){

    ios :: sync_with_stdio(false);
    cin.tie(0);

    vector<vector <int> >  a = {
        {10, 20, 30, 40},
        {15, 25, 35, 96},
        {17, 29, 37, 98},
        {32, 33, 39, 50}
    };
    int n = 4;
    int key = 17;

    int l=0, h=n-1, mid;
    while(l<n && h<n && h>=0 &&l>=0){
        // cout << l << " -- " << h << "\n";
        mid = l + (h-l)/2;
        if(a[l][h] == key){
            cout << l << " " << h;
            break;
        } else if(a[l][h] > key){
            h -=1;
        } else{
            l+=1;
        }
    }

    return 0;
}
```

---

## Conclusion

We did it! If you followed along with me through this whole tutorial, you should have a really good feel for Binary Search now. To summarize, we have divided the article into two parts. The first part deal with the Explanation of Binary Search Algorithm and few hidden Capabilities of the same. The second part(this article) covers rest of the Hiddent Capabilies and variations of Binary Search Algorithm.

This article should have given you a good understanding of Binary Search. There is much more to learn and improve, but I hope you feel confident delving in and playing around with Binary Search variations by yourself now.


* [`View Gist on GitHub`](https://gist.github.com/abhishek2x)

Please let me know if anything was unclear, or if there’s anything else you’d like to see in this or a subsequent article. Feel free to reach out to me anytime if you want to discuss something. I would be more than happy if you send your feedback, suggestions.

---

## *Happy Coding!*

#### Thanks a lot for reading till end. You can contact me in case if you need any assistance:


**Web:** https://portfolio.abhisheksrivastava.me/

**Instagram:** https://www.instagram.com/theprogrammedenthusiast/

**LinkedIn:** https://www.linkedin.com/in/abhishek-srivastava-49482a190/2020-

**Github:** https://github.com/abhishek2x

**Email:** abhisheksrivastavabbn@gmail.com

Link to published article: [`Medium`](https://medium.com/dsc-vit-bhopal/developer-student-clubs-d8dadd600b6d)