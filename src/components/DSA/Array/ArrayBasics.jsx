import React, { useState } from 'react';
import { Box, Typography, Container, Paper, Button, Collapse } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../../../styles/ArrayBasics.css';

const problems = [
  {
    title: "1. Find the Largest Element in an Array",
    solutions: [
      {
        label: "Solution 1 (Using Sorting)",
        code: `import java.util.*;
public class techfinity {
 
  public static void main(String args[]) {
 
    int arr1[] =  {2,5,1,3,0};
    System.out.println("The Largest element in the array is: " + sort(arr1));
   
    int arr2[] =  {8,10,5,7,9};
    System.out.println("The Largest element in the array is: " + sort(arr2));
  }
  static int sort(int arr[]) {
    Arrays.sort(arr);
    return arr[arr.length - 1];
  }
}`
      },
      {
        label: "Solution 2 (Using Loop)",
        code: `import java.util.*;
public class techfinity {
 
  public static void main(String args[]) {
 
    int arr1[] =  {2,5,1,3,0};
    System.out.println("The Largest element in the array is: "+findLargestElement(arr1));
 
    int arr2[] =  {8,10,5,7,9};
    System.out.println("The Largest element in the array is: "+findLargestElement(arr2));
  }
  static int findLargestElement(int arr[]) {
    int max= arr[0];
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max= arr[i];
      }
    }
    return max;
  }
}
`
      }
    ]
  },
  {
    title: "2. Remove Duplicates from Sorted Array",
    solutions: [
      {
        label: "Solution 1 (Using HashSet)",
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        int arr[] = {1,1,2,2,2,3,3};
        int k = removeDuplicates(arr);
        System.out.println("The array after removing duplicate elements is ");
        for (int i = 0; i < k; i++) {
            System.out.print(arr[i] + " ");
        }
    }
    static int removeDuplicates(int[] arr) {
        HashSet < Integer > set = new HashSet < > ();
        for (int i = 0; i < arr.length; i++) {
            set.add(arr[i]);
        }
        int k = set.size();
        int j = 0;
        for (int x: set) {
            arr[j++] = x;
        }
        return k;
    }
}
`
      },
      {
        label: "Solution 2 (Using Two Pointers)",
        code: `import java.util.*;
public class Main {
    public static void main(String[] args) {
       int arr[] = {1,1,2,2,2,3,3};
        int k = removeDuplicates(arr);
        System.out.println("The array after removing duplicate elements is ");
        for (int i = 0; i < k; i++) {
            System.out.print(arr[i] + " ");
        }
    }
    static int removeDuplicates(int[] arr) {
        int i = 0;
        for (int j = 1; j < arr.length; j++) {
            if (arr[i] != arr[j]) {
                i++;
                arr[i] = arr[j];
            }
        }
        return i + 1;
    }
}`
      }
    ]
  },
  {
    title: "3. Left Rotate the Array by One",
    solutions: [
      {
        label: "Single Solution",
        code: `import java.util.*;

class techfinity{
static void solve(int arr[], int n) {
  int temp[]=new int[n];
  for (int i = 1; i < n; i++) {
    temp[i - 1] = arr[i];
  }
  temp[n - 1] = arr[0];
  for (int i = 0; i < n; i++) {
    System.out.print(temp[i]+" ");
  }
  
}
public static void main(String args[]) {
  int n=5;
  
  int arr[]= {1,2,3,4,5};
  solve(arr, n);
}
}`
      },
      {
        label: "Solution 2 (Using Loop)",
        code: `import java.util.*;

class techfinity{
static void solve(int arr[], int n) {
  int temp = arr[0]; // storing the first element of array in a variable
  for (int i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp; // assigned the value of variable at the last index
  for (int i = 0; i < n; i++) {
    System.out.print(arr[i]+" ");
  }

  
}
public static void main(String args[]) {
  int n=5;
  
  int arr[]= {1,2,3,4,5};
  solve(arr, n);
}
}
`
      }
    ]
  },
  {
    title: "4. Rotate Array by K Elements",
    solutions: [
      {
        label: "Single Solution",
        code: `import java.util.*;
public class Main {
  public static void Rotatetoleft(int[] arr, int n, int k) {
    if (n == 0)
      return;
    k = k % n;
    if (k > n)
      return;
    int[] temp = new int[k];
    for (int i = 0; i < k; i++) {
      temp[i] = arr[i];
    }
    for (int i = k; i < n; i++) {
      arr[i-k] = arr[i];
    }
    for (int i = n - k; i < n; i++) {
      arr[i] = temp[i - (n -k)];
    }
  }
  public static void main(String args[]) {
    int n = 7;
    int[] arr = {1,2,3,4,5,6,7};
    int k = 2;
    Rotatetoleft(arr, n, k);
    System.out.println("After Rotating the elements to left ");
    for (int i = 0; i < n; i++) {
      System.out.print(arr[i] + " ");
    }
  }
}`
      }
    ]
  },
  {
    title: "5. Move All Zeros to the End",
    solutions: [
      {
        label: "Single Solution",
        code: `import java.util.*;

public class techfinity {
    public static int[] moveZeros(int n, int []a) {
        //temporary array:
        ArrayList<Integer> temp = new ArrayList<>();
        //copy non-zero elements
        //from original -> temp array:
        for (int i = 0; i < n; i++) {
            if (a[i] != 0)
                temp.add(a[i]);
        }

        // number of non-zero elements.
        int nz = temp.size();

        //copy elements from temp
        //fill first nz fields of
        //original array:
        for (int i = 0; i < nz; i++) {
            a[i] = temp.get(i);
        }

        //fill rest of the cells with 0:
        for (int i = nz; i < n; i++) {
            a[i] = 0;
        }
        return a;
    }

    public static void main(String[] args) {
        int[] arr = {1, 0, 2, 3, 2, 0, 0, 4, 5, 1};
        int n = 10;
        int[] ans = moveZeros(n, arr);
        for (int i = 0; i < n; i++) {
            System.out.print(ans[i] + " ");
        }
        System.out.println("");
    }
}
`
      }
    ]
  },
  {
    title: "6. Find the Missing Number in an Array",
    solutions: [
      {
        label: "Single Solution",
        code: `import java.util.*;

public class techfinity {
    public static int missingNumber(int []a, int N) {

        //Summation of first N numbers:
        int sum = (N * (N + 1)) / 2;

        //Summation of all array elements:
        int s2 = 0;
        for (int i = 0; i < N - 1; i++) {
            s2 += a[i];
        }

        int missingNum = sum - s2;
        return missingNum;
    }

    public static void main(String args[]) {
        int N = 5;
        int a[] = {1, 2, 4, 5};

        int ans = missingNumber(a, N);
        System.out.println("The missing number is: " + ans);
    }
}`
      }
    ]
  },
  {
    title: "7. Union of Two Sorted Arrays",
    solutions: [
      {
        label: "Using Hash Solution",
        code: `import java.util.*;

class techfinity{
static ArrayList<Integer> FindUnion(int arr1[], int arr2[], int n, int m) {
  HashSet <Integer> s=new HashSet<>();
  ArrayList < Integer > Union=new ArrayList<>();
  for (int i = 0; i < n; i++)
    s.add(arr1[i]);
  for (int i = 0; i < m; i++)
    s.add(arr2[i]);
  for (int it: s)
    Union.add(it);
  return Union;
}
public static void main(String args[]) {
  int n = 10, m = 7;
  int arr1[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  int arr2[] = {2, 3, 4, 4, 5, 11, 12};
  ArrayList<Integer> Union = FindUnion(arr1, arr2, n, m);
  System.out.println("Union of arr1 and arr2 is ");
  for (int val: Union)
    System.out.print(val+" ");
}
}`
      }
    ]
  },
  {
    title: "8. Count Maximum Consecutive Ones in the array",
    solutions: [
      {
        label: "Single Solution",
        code: `import java.util.*;
public class Main {
    static int findMaxConsecutiveOnes(int nums[]) {
        int cnt = 0;
        int maxi = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 1) {
                cnt++;
            } else {
                cnt = 0;
            }

            maxi = Math.max(maxi, cnt);
        }
        return maxi;
    }
    public static void main(String args[]) {
        int nums[] = { 1, 1, 0, 1, 1, 1 };
        int ans = findMaxConsecutiveOnes(nums);
        System.out.println("The maximum  consecutive 1's are " + ans);
    }
}
`
      }
    ]
  },
  {
    title: "9. Find the number that appears once, and the other numbers twice",
    solutions: [
      {
        label: "Single Solution",
        code: `import java.util.*;

public class techfinity {
    public static int getSingleElement(int []arr) {
        // Size of the array:
        int n = arr.length;

        //Run a loop for selecting elements:
        for (int i = 0; i < n; i++) {
            int num = arr[i]; // selected element
            int cnt = 0;

            //find the occurrence using linear search:
            for (int j = 0; j < n; j++) {
                if (arr[j] == num)
                    cnt++;
            }

            // if the occurrence is 1 return ans:
            if (cnt == 1) return num;
        }

        //This line will never execute
        //if the array contains a single element.
        return -1;
    }

    public static void main(String args[]) {
        int[] arr = {4, 1, 2, 1, 2};
        int ans = getSingleElement(arr);
        System.out.println("The single element is: " + ans);
      
    }
}
`
      }
    ]
},
{
    title: "10. Longest Subarray with given Sum K(Positives)",   
    solutions: [
      {
        label: "Single Solution",
        code: `import java.util.*;

public class techfinity {
    public static int getLongestSubarray(int []a, long k) {
        int n = a.length; // size of the array.

        int len = 0;
        for (int i = 0; i < n; i++) { // starting index
            long s = 0; // Sum variable
            for (int j = i; j < n; j++) { // ending index
                // add the current element to
                // the subarray a[i...j-1]:
                s += a[j];

                if (s == k)
                    len = Math.max(len, j - i + 1);
            }
        }
        return len;
    }

    public static void main(String[] args) {
        int[] a = {2, 3, 5, 1, 9};
        long k = 10;
        int len = getLongestSubarray(a, k);
        System.out.println("The length of the longest subarray is: " + len);
    }
}
    `
}
         ] 
        },
          {
            title: "11. Longest Subarray with sum K  [Postives and Negatives]",
            solutions: [
              {
                label: " Solution 1",
                code: `import java.util.*;

public class techfinity {
    public static int getLongestSubarray(int []a, int k) {
        int n = a.length; // size of the array.

        int len = 0;
        for (int i = 0; i < n; i++) { // starting index
            for (int j = i; j < n; j++) { // ending index
                // add all the elements of
                // subarray = a[i...j]:
                int s = 0;
                for (int K = i; K <= j; K++) {
                    s += a[K];
                }

                if (s == k)
                    len = Math.max(len, j - i + 1);
            }
        }
        return len;
    }

    public static void main(String[] args) {
        int[] a = { -1, 1, 1};
        int k = 1;
        int len = getLongestSubarray(a, k);
        System.out.println("The length of the longest subarray is: " + len);
    }
} `
              },

              {
                label: "Solution 2 (Using Loop)",
                code: `import java.util.*;

public class techfinity {
    public static int getLongestSubarray(int []a, int k) {
        int n = a.length; // size of the array.

        int len = 0;
        for (int i = 0; i < n; i++) { // starting index
            int s = 0;
            for (int j = i; j < n; j++) { // ending index
                // add the current element to
                // the subarray a[i...j-1]:
                s += a[j];

                if (s == k)
                    len = Math.max(len, j - i + 1);
            }
        }
        return len;
    }

    public static void main(String[] args) {
        int[] a = { -1, 1, 1};
        int k = 1;
        int len = getLongestSubarray(a, k);
        System.out.println("The length of the longest subarray is: " + len);
    }
}
` }
]
}
];
const ArrayBasics = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const handleToggle = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Paper elevation={3} sx={{ p: 5, borderRadius: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#2E7D32', mb: 4 }}>
          Java Array Problems with Solutions
        </Typography>

        {problems.map((problem, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Button
              onClick={() => handleToggle(index)}
              variant="contained"
              fullWidth
              sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              {problem.title}
            </Button>

            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
              <Paper sx={{ p: 4, mt: 2, backgroundColor: '#f1f8e9' }}>
              {problem.solutions.map((solution, solIndex) => (
  <Box key={`${index}-${solIndex}`} sx={{ mb: 4 }}>
                    <Typography variant="h6">{solution.label}</Typography>
                    <SyntaxHighlighter language="java" style={okaidia} showLineNumbers>
                      {solution.code}
                    </SyntaxHighlighter>
                  </Box>
                ))}
              </Paper>
            </Collapse>
          </Box>
        ))}
      </Paper>
    </Container>
  );
};

export default ArrayBasics;
