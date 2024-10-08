# project_architecture

## Tech Stack

#### *- Bun, Express.js, TypeScript, MongoDB*

## Descriptions
- **api/routes/v1/controllers/:** Tệp này chứa logic xử lý các yêu cầu HTTP liên quan.
- **api/helpers/:** Đây là tệp chứa các hàm tiện ích (helper functions) được sử dụng xuyên suốt dự án để tái sử dụng code.
- **api/interfaces/:** Tệp này định nghĩa các interface trong TypeScript để thiết lập kiểu dữ liệu và cấu trúc cho các đối tượng.
- **api/middlewares/:** Đây là nơi chứa các hàm middleware, được sử dụng cho các tác vụ như xác thực (authentication), phân quyền (authorization), hoặc xử lý lỗi.
- **api/models/:** Định nghĩa mô hình dữ liệu (model) được lưu trữ trong cơ sở dữ liệu.
- **api/routes/:** Tệp này chứa định tuyến (routes) cho các API kết nối giữa các yêu cầu HTTP và controller.
- **api/services/:** Xử lý logic nghiệp vụ (business logic), cung cấp các hàm để tương tác với cơ sở dữ liệu.
- **api/validations/:** Chứa các quy tắc xác thực dữ liệu (validation rules), có thể được dùng để kiểm tra dữ liệu trước khi xử lý.
- **config/:** Cấu hình ứng dụng, có thể chứa các thiết lập liên quan đến ứng dụng như kết nối cơ sở dữ liệu, các middleware hoặc cài đặt server.


To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
bun run dev
```

This project was created using `bun init` in bun v1.1.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
