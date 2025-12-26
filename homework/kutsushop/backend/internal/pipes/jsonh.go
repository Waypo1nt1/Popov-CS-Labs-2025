package pipes

import (
	"encoding/json"
	"fmt"
)

func ToJson(data interface{}) []byte {
	data_json, err := json.Marshal(data)
	if err != nil {
		println("unmarshal error: ", err)
	}
	return data_json
}

func FromJson[T any](data []byte, store_to T) {
	err := json.Unmarshal(data, &store_to)
	if err != nil {
		fmt.Println("unmarshal error: ", err)
	}
}
