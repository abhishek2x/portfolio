---
title: "Capabilities of Binary Search Algorithm: Part-1"
path: blog/binary-search-1
tags: [algorithms, dsa, binary-search]
cover: ./cover.png
date: 2020-11-19
excerpt: More than just a Searching Algorithm

---

## Binary Search


In computer science, **`binary search`**, also known as **`half-interval search`**, **`logarithmic search`**, or **`binary chop`**, is a *`search algorithm`* that finds the position of a target value within a **`sorted array`**.


Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

#### Note: The array must be sorted

<img src="./1.png">
<br/>
<br/>

Through the above algorithms, after each iteration, we are reducing the size of the searchable array by half, which leads to `logarithmic time complexity`.


```cpp
// C++ program to implement recursive Binary Search 

#include <bits/stdc++.h>
using namespace std;
#define ll long long int
  
int binarySearch(int arr[], int l, int r, int x) {
  
    while (l <= r) { 
        int m = l + (r - l) / 2; 

        // Element found at mid
        if (arr[m] == x) 
            return m; 
  
        // If x greater, ignore left half 
        if (arr[m] < x) 
            l = m + 1; 
  
        // If x is smaller, ignore right half 
        else
            r = m - 1; 
    } 
  
    // if we reach here, then element was 
    // not present 
    return -1; 
} 

int main(void) { 

    ios :: sync_with_stdio(false);
    cin.tie(0);

    int arr[] = { 2, 3, 4, 10, 40 }; 
    int x = 10; 
    int n = sizeof(arr) / sizeof(arr[0]); // 5
    int result = binarySearch(arr, 0, n - 1, x); 

    (result == -1) ? cout << "Element is not present in array"
                   : cout << "Element is present at index " << result; 
    return 0; 
} 

```

---

## Unravelling Hidden Capabilities:

### At the end, it’s all about optimization


Now, since you are aware of the basic implementation of Binary Search Algorithm, it’s time to move a step ahead and familiarise the with the powerful capabilities of Binary Search Algorithm.

*`Note:` You can solve the below variations using other approaches as well, but here we’ll be using binary search, in order to understand it well and also optimise our code*



### Here is a list of the same:


* Searching in Reversed Sorted Array.
* Finding First and Last Occurance an Element.
* Finding Floor and Ceil of an Element.
* Finding the peak of an array.
* Finding Square Root of a number.
* Number of times a Sorted array is rotated.
* Searching in Nearly Sorted Array.
* Finding a position on an Element in an infinite array.
* Searching in Bitonic Array.
* Searching in 2-D Array.

*In this article, I’ll be covering each variation in detail, with explanation and source code.*

---

## 1. Searching in Reversed Sorted Array.

You are aware that the Binary Search Algorithm works on Sorted array. What if we reverse that array and come up with a reversed sorted array?

`Approach:`

*Normally when the mid element is less than x, we search in the right section of the array and vice-versa, but here we will be considering an opposite approach. If the mid element is less than x, we search in the left section of the array and vice-versa.*

```cpp
// Binary Search algorithm on a reversed sorted array.

#include <bits/stdc++.h>
using namespace std;
#define ll long long int

int main(){

    ios :: sync_with_stdio(false);
    cin.tie(0);

    vector<int> v = {9, 7, 5, 3 , 2};
    int l, r, mid, x=7;
    l = 0;
    r = v.size()-1;

    while(l<=r){
        mid = l + (r-l)/2;
        if(v[mid] == x){
            cout << x << " found at " << mid << "\n";
            break;
        } else if(v[mid] > x){
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return 0;
}

```

---

## 2. Finding First and Last Occurance an Element.


Here we need to find the first and last occurrence of an element in an array. Let’s understand this with an example:

array = `{1, 3, 10, 10, 10, 12, 13};`

First Occurrence of 10 = 2
Last Occurrence of 10 = 4

`Approach:`

In this problem, we’ll search for x as we are searching normally. When we find the element, then there are two situations:
* To find the first Occurance, we keep searching for the element in the left part of the array.
* To find the last Occurance, we keep searching for the element in the right part of the array.

```cpp
// Finding First and Last Occurance an Element in a Sorted Array

#include <bits/stdc++.h>
using namespace std;
#define ll long long int

int main(){

    ios :: sync_with_stdio(false);
    cin.tie(0);

    vector<int> v = {1, 3, 10, 10, 10, 12, 13};
    int l, r, mid, x=10;
    l = 0;
    r = v.size()-1;

    int firstOccr, lastOccr;

    while(l<=r){
        mid = (r+l)/2;
        if(v[mid] == x){
            firstOccr = mid;
            r = mid-1;
        } else if(v[mid] > x){
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    l = 0;
    r = v.size()-1;

    while(l<=r){
        mid = (r+l)/2;
        if(v[mid] == x){
            lastOccr = mid;
            l = mid+1;
        } else if(v[mid] > x){
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    cout << firstOccr << " " << lastOccr;
    return 0;
}

```
---

## 3. Finding Floor and Ceil of an Element.

### Floor of an Element
**floor(x)**: Returns the largest integer that is smaller than or equal to x (i.e: rounds downs the nearest integer).

`Approach:`

*Normally, we use == operator to check is mid is equal or not, this time we have to check if mid is ≤ that element. Also, we need to get close to that element, so even if we found an element which is less than mid, we’ll still move the left to mid+1 to get a better answer.*

```cpp
/*!
* Finding Floor of an Element in a Sorted array
*/

#include <bits/stdc++.h>
using namespace std;
#define ll long long int

int main(){

    ios :: sync_with_stdio(false);
    cin.tie(0);

    vector<int> arr = {1, 2, 3, 4, 7, 10, 14};
    int f = 13;
    int res;

    int l=0, h=arr.size()-1, mid;
    while(l <= h){
        mid = l + (h-l)/2;
        if(f >= arr[mid]){
            res = arr[mid];
            l = mid+1;
        }
        else {
            h = mid-1;
        }
    }

    cout << res << "\n";

    return 0;
}
```

### Ceil of an Element
**ceil(x)**: Returns the smallest integer that is greater than or equal to x (i.e: rounds up the nearest integer).

`Approach:`

*Normally, we use == operator to check is mid is equal or not, this time we have to check if mid is ≥ that element. Also, we need to get close to that element, so even if we found an element which is greater than mid, we’ll still move the right to mid-1 to get a better answer.*

```cpp
/*!
* Finding Ceil of an Element in a Sorted array
*/

#include <bits/stdc++.h>
using namespace std;
#define ll long long int

int main(){

    ios :: sync_with_stdio(false);
    cin.tie(0);

    vector<int> arr = {1, 2, 3, 4, 7, 10, 14};
    int f = 5;
    int res;

    int l=0, h=arr.size()-1, mid;
    while(l <= h){
        mid = l + (h-l)/2;
        if(f <= arr[mid]){
            res = arr[mid];
            h = mid-1;
        }
        else {
            l = mid+1;
        }
    }

    cout << res << "\n";

    return 0;
}

```

---

## 4. Finding the peak of an array.

In this problem. you will not be provided with a sorted array, instead, you’ll be provided with an array which is `monotonically increasing` and `monotonically decreasing` in some parts.

`Example:`

a = `{1, 4, 5, 10, 7, 3, 5, 2}`
Peak = 10 at index 3

`Observation:`

the first part (index 0 to 3) is strictly increasing and the second part (index 3 to 7) is strictly decreasing.
the peak element is always greater than it’s neighbours
No element other than the peak element is greater than both of its neighbours

*We’ll consider the above observations to come up with an efficient solution*

```cpp
/*!
* Finding the peak of an array
*/

#include <bits/stdc++.h>
using namespace std;
#define ll long long int

int main(){

    ios :: sync_with_stdio(false);
    cin.tie(0);

    vector<int> a = {1, 4, 5, 10, 7, 3, 5, 2};

    int l=0, h=a.size()-1, mid;
    while(l <= h){
        mid = l + (h-l)/2;
        if(mid == 0){
            if(a[mid] > a[mid+1]){
                cout << a[mid];
                // break;
            }
        } else if (mid == a.size()-1){
            if(a[mid] > a[mid-1]){
                cout << a[mid];
                // break;
            }
        } else if(a[mid]>a[mid-1] && a[mid] > a[mid+1]){
            cout << a[mid] << "\n";
            // break;
        }
        else if(a[mid] < a[mid-1]){
            l = mid+1;
        } else {
            h = mid-1;
        }
    }

    return 0;
}

```

---

Well, that’s it for today :(

I am sorry buddy, I really don’t want to leave it in between, but currently, I am a bit short on time, plus, if I cover all the ten variations in a single blog, it will be too lengthy, and lengthy blogs become boring :/

So yeah, that’s it for today, I will be back with the next six variations of Binary Search Algorithm in the next weekend and yes I can assure you that the second part is going to be much more interesting and we going to come up with something really cool, till then, enjoy, and thanks for reading till the end.

## *Happy Coding!*

#### Feel free to reach out to me anytime if you want to discuss something. I would be more than happy if you send your feedback, suggestions.



**Web:** https://portfolio.abhisheksrivastava.me/

**Instagram:** https://www.instagram.com/theprogrammedenthusiast/

**LinkedIn:** https://www.linkedin.com/in/abhishek-srivastava-49482a190/

**Github:** https://github.com/abhishek2x

**Email:** abhisheksrivastavabbn@gmail.com

Link to published article: [`Medium`](https://medium.com/dsc-vit-bhopal/developer-student-clubs-d8dadd600b6d)