import React from 'react';
import "../../../styles/ArrayBasics.css";


const ArrayBasics = () => {
  return (
    <div className="container">
      <h1>Java Array Problems with Multiple Solutions</h1>

      {/* 1. Largest Element */}
      <div className="question">1. Find the Largest Element in an Array</div>

      <h3>Solution 1 (Using Sorting):</h3>
      <pre>
        {`import java.util.*;
public class tuf {
    public static void main(String args[]) {
        int arr[] = {2, 5, 1, 3, 0};
        System.out.println("Largest element: " + sort(arr));
    }
    static int sort(int arr[]) {
        Arrays.sort(arr);
        return arr[arr.length - 1];
    }
}`}
      </pre>

      <h3>Solution 2 (Using Loop):</h3>
      <pre>
        {`import java.util.*;
public class tuf {
    public static void main(String args[]) {
        int arr[] = {8, 10, 5, 7, 9};
        System.out.println("Largest element: " + findLargestElement(arr));
    }
    static int findLargestElement(int arr[]) {
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        return max;
    }
}`}
      </pre>

      {/* 2. Remove Duplicates */}
      <div className="question">2. Remove Duplicates In-Place from Sorted Array</div>

      <h3>Solution 1 (Using HashSet):</h3>
      <pre>
        {`import java.util.*;
public class Main {
    public static void main(String[] args) {
        int arr[] = {1, 1, 2, 2, 3};
        int k = removeDuplicates(arr);
        for (int i = 0; i < k; i++) System.out.print(arr[i] + " ");
    }
    static int removeDuplicates(int[] arr) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : arr) set.add(num);
        int i = 0;
        for (int num : set) arr[i++] = num;
        return set.size();
    }
}`}
      </pre>

      <h3>Solution 2 (Using Two Pointers):</h3>
      <pre>
        {`import java.util.*;
public class Main {
    public static void main(String[] args) {
        int arr[] = {1, 1, 2, 3, 3};
        int k = removeDuplicates(arr);
        for (int i = 0; i < k; i++) System.out.print(arr[i] + " ");
    }
    static int removeDuplicates(int[] arr) {
        int i = 0;
        for (int j = 1; j < arr.length; j++) {
            if (arr[i] != arr[j]) arr[++i] = arr[j];
        }
        return i + 1;
    }
}`}
      </pre>

      {/* 3. Left Rotate */}
      <div className="question">3. Left Rotate the Array by One</div>
      <pre>
        {`import java.util.*;
class TUF {
    static void solve(int arr[], int n) {
        int temp = arr[0];
        for (int i = 0; i < n - 1; i++) arr[i] = arr[i + 1];
        arr[n - 1] = temp;
        System.out.println(Arrays.toString(arr));
    }
    public static void main(String args[]) {
        int arr[] = {1, 2, 3, 4, 5};
        solve(arr, arr.length);
    }
}`}
      </pre>

      {/* 4. Rotate by K */}
      <div className="question">4. Rotate Array by K Elements</div>
      <pre>
        {`import java.util.*;
public class Main {
    public static void rotate(int[] arr, int n, int k) {
        k %= n;
        int[] temp = Arrays.copyOfRange(arr, 0, k);
        System.arraycopy(arr, k, arr, 0, n - k);
        System.arraycopy(temp, 0, arr, n - k, k);
    }
    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5, 6, 7};
        int k = 2;
        rotate(arr, arr.length, k);
        System.out.println(Arrays.toString(arr));
    }
}`}
      </pre>

      {/* 5. Move Zeros */}
      <div className="question">5. Move All Zeros to the End</div>
      <pre>
        {`import java.util.*;
public class Main {
    public static void moveZeros(int[] arr) {
        int index = 0;
        for (int num : arr) if (num != 0) arr[index++] = num;
        while (index < arr.length) arr[index++] = 0;
        System.out.println(Arrays.toString(arr));
    }
    public static void main(String[] args) {
        int[] arr = {1, 0, 2, 0, 4};
        moveZeros(arr);
    }
}`}
      </pre>

      {/* 6. Union of Two Arrays */}
      <div className="question">6. Union of Two Sorted Arrays</div>
      <pre>
        {`import java.util.*;
class TUF {
    static ArrayList<Integer> findUnion(int arr1[], int arr2[]) {
        Set<Integer> set = new TreeSet<>();
        for (int num : arr1) set.add(num);
        for (int num : arr2) set.add(num);
        return new ArrayList<>(set);
    }
    public static void main(String args[]) {
        int arr1[] = {1, 2, 3, 4};
        int arr2[] = {3, 4, 5, 6};
        System.out.println(findUnion(arr1, arr2));
    }
}`}
      </pre>

      {/* 7. Find the Missing Number */}
      <div className="question">7. Find the Missing Number in an Array</div>
      <pre>
        {`import java.util.*;
public class Main {
    public static int missingNumber(int[] a, int N) {
        int sum = (N * (N + 1)) / 2;
        int actualSum = 0;
        for (int num : a) actualSum += num;
        return sum - actualSum;
    }
    public static void main(String[] args) {
        int[] a = {1, 2, 4, 5};
        int N = 5;
        System.out.println("Missing number: " + missingNumber(a, N));
    }
}`}
      </pre>

      {/* 8. Count Maximum Consecutive Ones */}
      <div className="question">8. Count Maximum Consecutive Ones</div>
      <pre>
        {`import java.util.*;
public class Main {
    public static int findMaxConsecutiveOnes(int[] nums) {
        int maxCount = 0, currentCount = 0;
        for (int num : nums) {
            if (num == 1) currentCount++;
            else currentCount = 0;
            maxCount = Math.max(maxCount, currentCount);
        }
        return maxCount;
    }
}`}
      </pre>

      {/* 9. Find the Single Element */}
      <div className="question">9. Find the Number that Appears Once</div>
      <pre>
        {`import java.util.*;
public class Main {
    public static int getSingleElement(int[] arr) {
        int unique = 0;
        for (int num : arr) unique ^= num;
        return unique;
    }
}`}
      </pre>

      {/* 10 & 11: Longest Subarray with Sum K */}
      <div className="question">10 & 11. Longest Subarray with Sum K</div>
      <pre>
        {`import java.util.*;
public class Main {
    public static int getLongestSubarray(int[] a, int k) {
        int maxLen = 0, sum = 0;
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < a.length; i++) {
            sum += a[i];
            if (sum == k) maxLen = i + 1;
            if (!map.containsKey(sum)) map.put(sum, i);
            if (map.containsKey(sum - k)) maxLen = Math.max(maxLen, i - map.get(sum - k));
        }
        return maxLen;
    }
}`}
      </pre>
    </div>
  );
};

export default ArrayBasics;
