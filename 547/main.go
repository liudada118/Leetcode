// 朋友圈
// GO 语言 表达二位数组？


func findCircleNum = function(M[][]int)

package main 

import "fmt"

func findCircleNum(M [][]int) int{
	N := len(M)
	fmt.Printf('%d' , N)
	res := N
	friend := make([]int, res)
	for i = 0 ; i < res ; i++ {
		friend[i] = i 
	}
	return res
}

func main (){
	count := findCircleNum([][]int {
		{ 1 , 1 , 0 },
		{1 , 1 , 0},
		{0 , 0 , 1}
	})
	fmt.Printf('朋友圈的数量是%d', count)
}