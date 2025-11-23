// Dữ liệu MBTI Test - 4 phần với tổng cộng 50 câu hỏi
const mbtiData = [
    {
        id: "ei",
        name: "Phần 1: Hướng ngoại (E) vs. Hướng nội (I)",
        description: "(Cách bạn nạp năng lượng và tương tác với thế giới)",
        questions: [
            {
                text: "Trong một buổi tụ tập, bạn cảm thấy tràn đầy năng lượng hơn khi nào?",
                answers: [
                    { text: "Tương tác với một nhóm đông người", type: "E" },
                    { text: "Trò chuyện với từng người một", type: "I" }
                ]
            },
            {
                text: "Bạn thường sạc lại năng lượng sau một ngày bận rộn bằng cách nào?",
                answers: [
                    { text: "Dành thời gian với bạn bè hoặc tham gia các hoạt động xã hội", type: "E" },
                    { text: "Dành thời gian một mình để thư giãn và nghỉ ngơi", type: "I" }
                ]
            },
            {
                text: "Khi gặp thử thách, bạn thích làm gì hơn?",
                answers: [
                    { text: "Thảo luận ý tưởng với người khác", type: "E" },
                    { text: "Tự mình suy nghĩ và giải quyết vấn đề", type: "I" }
                ]
            },
            {
                text: "Vào thời gian rảnh, bạn thường thấy mình làm gì?",
                answers: [
                    { text: "Tìm kiếm các sự kiện xã hội và các buổi tụ tập", type: "E" },
                    { text: "Tận hưởng các hoạt động yên tĩnh tại nhà", type: "I" }
                ]
            },
            {
                text: "Bạn cảm thấy thế nào về những cuộc nói chuyện xã giao?",
                answers: [
                    { text: "Thích thú và thấy dễ dàng tham gia", type: "E" },
                    { text: "Thấy hơi ngượng ngùng hoặc mệt mỏi", type: "I" }
                ]
            },
            {
                text: "Khi ra quyết định, bạn thường làm gì?",
                answers: [
                    { text: "Hỏi ý kiến từ người khác", type: "E" },
                    { text: "Tin vào trực giác và cảm nhận của riêng mình", type: "I" }
                ]
            },
            {
                text: "Bạn xử lý những tình huống mới lạ và không quen thuộc như thế nào?",
                answers: [
                    { text: "Đón nhận chúng một cách hào hứng", type: "E" },
                    { text: "Tiếp cận chúng một cách thận trọng", type: "I" }
                ]
            },
            {
                text: "Trong môi trường làm việc hoặc đội nhóm, bạn thích gì hơn?",
                answers: [
                    { text: "Không gian mở và sự cộng tác", type: "E" },
                    { text: "Không gian làm việc cá nhân riêng biệt", type: "I" }
                ]
            },
            {
                text: "Bạn thường phản ứng thế nào khi trở thành tâm điểm của sự chú ý?",
                answers: [
                    { text: "Đón nhận và cảm thấy thoải mái", type: "E" },
                    { text: "Muốn tránh bị chú ý, thấy ngại", type: "I" }
                ]
            },
            {
                text: "Khi lên kế hoạch cuối tuần, bạn nghiêng về hướng nào?",
                answers: [
                    { text: "Các kế hoạch đi chơi với bạn bè", type: "E" },
                    { text: "Thời gian yên tĩnh cho bản thân", type: "I" }
                ]
            },
            {
                text: "Khi gặp người mới, bạn thường làm gì?",
                answers: [
                    { text: "Chủ động bắt chuyện và giới thiệu bản thân", type: "E" },
                    { text: "Chờ người khác đến bắt chuyện với mình", type: "I" }
                ]
            }
        ]
    },
    {
        id: "sn",
        name: "Phần 2: Tri giác (S) vs. Trực giác (N)",
        description: "(Cách bạn tiếp nhận và xử lý thông tin)",
        questions: [
            {
                text: "Khi đối mặt với vấn đề, bạn thích dựa vào đâu hơn?",
                answers: [
                    { text: "Dựa vào thực tế cụ thể và chi tiết", type: "S" },
                    { text: "Khám phá các khả năng có thể xảy ra và ý nghĩa tiềm ẩn", type: "N" }
                ]
            },
            {
                text: "Bạn tiếp cận thông tin mới hoặc việc học như thế nào?",
                answers: [
                    { text: "Thích các trải nghiệm thực tế, cầm tay chỉ việc", type: "S" },
                    { text: "Thích khám phá các lý thuyết và khái niệm trừu tượng", type: "N" }
                ]
            },
            {
                text: "Trong cuộc trò chuyện, bạn tập trung vào điều gì hơn?",
                answers: [
                    { text: "Các tình tiết hiện tại và thực tế ngay lúc đó", type: "S" },
                    { text: "Các khả năng có thể xảy ra và các mô hình/quy luật", type: "N" }
                ]
            },
            {
                text: "Khi lên kế hoạch đi du lịch, bạn thích kiểu nào?",
                answers: [
                    { text: "Có lịch trình chi tiết và thời gian biểu rõ ràng", type: "S" },
                    { text: "Để trống thời gian cho những trải nghiệm ngẫu hứng và thay đổi", type: "N" }
                ]
            },
            {
                text: "Bạn ra quyết định như thế nào?",
                answers: [
                    { text: "Dựa trên những cân nhắc thực tế và ứng dụng đời thực", type: "S" },
                    { text: "Cân nhắc các kết quả tiềm năng và theo trực giác của bản thân", type: "N" }
                ]
            },
            {
                text: "Khi làm dự án, bạn có xu hướng tập trung vào đâu?",
                answers: [
                    { text: "Các nhiệm vụ cụ thể trước mắt", type: "S" },
                    { text: "Cái nhìn tổng thể và mục tiêu cuối cùng", type: "N" }
                ]
            },
            {
                text: "Trong thảo luận nhóm, bạn thích làm gì?",
                answers: [
                    { text: "Bám sát vào các sự kiện và chi tiết thực tế", type: "S" },
                    { text: "Đóng góp các ý tưởng và giả thuyết mới", type: "N" }
                ]
            },
            {
                text: "Bạn xử lý thế nào khi kế hoạch bị thay đổi bất ngờ?",
                answers: [
                    { text: "Thích sự ổn định và thấy khó khăn khi phải thay đổi", type: "S" },
                    { text: "Thích nghi tốt với thay đổi và thích sự linh hoạt", type: "N" }
                ]
            },
            {
                text: "Khi nhớ lại một sự kiện quá khứ, bạn tập trung vào gì?",
                answers: [
                    { text: "Các chi tiết và sự việc cụ thể đã xảy ra", type: "S" },
                    { text: "Ấn tượng chung và ý nghĩa của sự kiện đó", type: "N" }
                ]
            },
            {
                text: "Khi đọc sách hoặc xem phim, bạn chú ý đến điều gì?",
                answers: [
                    { text: "Cốt truyện và các sự kiện diễn ra", type: "S" },
                    { text: "Ngụ ý và tính biểu tượng", type: "N" }
                ]
            },
            {
                text: "Bạn thích tiếp nhận thông tin theo cách nào?",
                answers: [
                    { text: "Các giải thích rõ ràng, thẳng thắn", type: "S" },
                    { text: "Tính khả thi và các mối liên kết tiềm năng", type: "N" }
                ]
            },
            {
                text: "Khi phải quyết định, bạn dựa vào đâu?",
                answers: [
                    { text: "Kinh nghiệm quá khứ và các phương pháp đã được kiểm chứng", type: "S" },
                    { text: "Tìm kiếm các giải pháp sáng tạo và đổi mới", type: "N" }
                ]
            },
            {
                text: "Trong buổi brainstorm, bạn thường đưa ra ý kiến thế nào?",
                answers: [
                    { text: "Các ý tưởng thực tế, có thể làm được ngay", type: "S" },
                    { text: "Các ý tưởng giàu trí tưởng tượng", type: "N" }
                ]
            },
            {
                text: "Bạn tiếp cận việc giải quyết vấn đề ra sao?",
                answers: [
                    { text: "Từng bước một và có phương pháp cụ thể", type: "S" },
                    { text: "Tiếp cận với sự sáng tạo và theo trực giác", type: "N" }
                ]
            }
        ]
    },
    {
        id: "tf",
        name: "Phần 3: Lý trí (T) vs. Cảm xúc (F)",
        description: "(Cách bạn đưa ra quyết định)",
        questions: [
            {
                text: "Khi ra quyết định, bạn ưu tiên điều gì?",
                answers: [
                    { text: "Phân tích logic và các tiêu chí khách quan", type: "T" },
                    { text: "Cân nhắc ảnh hưởng đến con người và các mối quan hệ", type: "F" }
                ]
            },
            {
                text: "Bạn xử lý lời phê bình hoặc phản hồi như thế nào?",
                answers: [
                    { text: "Tập trung vào sự thật và tìm giải pháp mang tính xây dựng", type: "T" },
                    { text: "Quan tâm đến khía cạnh cảm xúc và ảnh hưởng của nó tới mối quan hệ", type: "F" }
                ]
            },
            {
                text: "Khi gặp vấn đề, bạn dựa vào đâu nhiều hơn?",
                answers: [
                    { text: "Cái đầu và lý lẽ", type: "T" },
                    { text: "Trái tim và sự đồng cảm", type: "F" }
                ]
            },
            {
                text: "Bạn sắp xếp ưu tiên công việc dựa trên gì?",
                answers: [
                    { text: "Dựa trên tầm quan trọng về mặt logic và tính hiệu quả", type: "T" },
                    { text: "Cân nhắc các giá trị và tác động đến con người", type: "F" }
                ]
            },
            {
                text: "Khi nhóm cần ra quyết định, bạn có xu hướng ủng hộ lựa chọn nào?",
                answers: [
                    { text: "Lựa chọn logic và hợp lý nhất", type: "T" },
                    { text: "Lựa chọn phù hợp với giá trị cá nhân và giữ hòa khí", type: "F" }
                ]
            },
            {
                text: "Khi đưa ra nhận xét, bạn tập trung vào gì?",
                answers: [
                    { text: "Đưa ra phân tích khách quan", type: "T" },
                    { text: "Cân nhắc cảm xúc và phản ứng của người nghe", type: "F" }
                ]
            },
            {
                text: "Bạn thể hiện quan điểm trong tranh luận như thế nào?",
                answers: [
                    { text: "Nhấn mạnh vào sự thật, bằng chứng và lý luận logic", type: "T" },
                    { text: "Cân nhắc giá trị cá nhân, cảm xúc và tác động đến mọi người", type: "F" }
                ]
            },
            {
                text: "Khi giải quyết vấn đề, bạn ưu tiên điều gì hơn?",
                answers: [
                    { text: "Hiệu quả và năng suất, ngay cả khi phải thẳng thắn", type: "T" },
                    { text: "Cân nhắc cảm xúc của những người liên quan", type: "F" }
                ]
            },
            {
                text: "Trong môi trường làm việc, bạn coi trọng điều gì?",
                answers: [
                    { text: "Các chỉ số hiệu suất khách quan và kết quả", type: "T" },
                    { text: "Văn hóa đội nhóm tích cực và hỗ trợ lẫn nhau", type: "F" }
                ]
            },
            {
                text: "Bạn tiếp cận việc giải quyết xung đột như thế nào?",
                answers: [
                    { text: "Tập trung tìm giải pháp logic và thỏa hiệp", type: "T" },
                    { text: "Quan tâm đến nhu cầu cảm xúc và sự hòa thuận của mọi người", type: "F" }
                ]
            },
            {
                text: "Khi tổ chức sự kiện, bạn ưu tiên gì?",
                answers: [
                    { text: "Các bước logic và dòng thời gian (timeline)", type: "T" },
                    { text: "Bầu không khí cảm xúc và sự gắn kết của mọi người", type: "F" }
                ]
            },
            {
                text: "Bạn đối phó với căng thẳng (stress) như thế nào?",
                answers: [
                    { text: "Phân tích tình huống một cách logic và lập kế hoạch chiến lược", type: "T" },
                    { text: "Tìm kiếm sự hỗ trợ tinh thần và nghĩ đến các mối quan hệ", type: "F" }
                ]
            },
            {
                text: "Khi ra quyết định, điều gì có sức nặng hơn với bạn?",
                answers: [
                    { text: "Dữ liệu khách quan và sự phân tích", type: "T" },
                    { text: "Giá trị cá nhân và ảnh hưởng tới con người", type: "F" }
                ]
            },
            {
                text: "Khi góp ý cho ai đó, bạn ưu tiên điều gì?",
                answers: [
                    { text: "Phê bình mang tính xây dựng và đề xuất cải thiện", type: "T" },
                    { text: "Nhấn mạnh điểm tích cực và khích lệ người đó", type: "F" }
                ]
            }
        ]
    },
    {
        id: "jp",
        name: "Phần 4: Nguyên tắc (J) vs. Linh hoạt (P)",
        description: "(Cách tiếp cận của bạn với thế giới bên ngoài)",
        questions: [
            {
                text: "Bạn cảm thấy thế nào về việc lập kế hoạch và bám sát lịch trình?",
                answers: [
                    { text: "Thích lập kế hoạch và ưu tiên lịch trình có cấu trúc", type: "J" },
                    { text: "Thích sự linh hoạt, ngẫu hứng và không thích lịch trình cứng nhắc", type: "P" }
                ]
            },
            {
                text: "Khi bắt đầu dự án, bạn thích cách nào?",
                answers: [
                    { text: "Có kế hoạch chi tiết ngay từ đầu", type: "J" },
                    { text: "Vừa làm vừa khám phá và tùy cơ ứng biến", type: "P" }
                ]
            },
            {
                text: "Bạn tiếp cận hạn chót (deadline) như thế nào?",
                answers: [
                    { text: "Làm việc chăm chỉ để hoàn thành trước hạn từ sớm", type: "J" },
                    { text: "Thường làm việc tốt hơn dưới áp lực và sát nút deadline", type: "P" }
                ]
            },
            {
                text: "Tại nơi làm việc, bạn thích không gian thế nào?",
                answers: [
                    { text: "Thích không gian rõ ràng và ngăn nắp", type: "J" },
                    { text: "Thoải mái với môi trường linh hoạt và dễ thích nghi", type: "P" }
                ]
            },
            {
                text: "Khi soạn đồ đi du lịch, bạn làm gì?",
                answers: [
                    { text: "Lên kế hoạch và làm danh sách kiểm tra (checklist) từ trước", type: "J" },
                    { text: "Soạn đồ tùy hứng, thấy cái gì hợp thì bỏ vào lúc đó", type: "P" }
                ]
            },
            {
                text: "Bạn làm gì khi kế hoạch đột ngột thay đổi?",
                answers: [
                    { text: "Không thích những thay đổi bất ngờ, muốn bám theo kế hoạch gốc", type: "J" },
                    { text: "Thích nghi tốt với thay đổi và tận hưởng sự linh hoạt", type: "P" }
                ]
            },
            {
                text: "Khi đứng trước cơ hội mới, bạn làm gì?",
                answers: [
                    { text: "Cân nhắc ưu/nhược điểm kỹ lưỡng trước khi quyết định", type: "J" },
                    { text: "Thuận theo tự nhiên và xem nó dẫn đến đâu", type: "P" }
                ]
            },
            {
                text: "Bạn tiếp cận nhiệm vụ công việc ra sao?",
                answers: [
                    { text: "Thích có kế hoạch định sẵn và làm theo từng bước", type: "J" },
                    { text: "Thích linh hoạt và điều chỉnh khi tình huống thay đổi", type: "P" }
                ]
            },
            {
                text: "Khi sắp xếp một ngày của mình, bạn thích gì?",
                answers: [
                    { text: "Có danh sách việc cần làm với nhiệm vụ và giờ giấc cụ thể", type: "J" },
                    { text: "Để mở và xem ngày hôm đó đưa mình đến đâu", type: "P" }
                ]
            },
            {
                text: "Bạn cảm thấy thế nào về thói quen và sự lặp lại?",
                answers: [
                    { text: "Thích thói quen và thấy thoải mái khi mọi thứ dễ đoán", type: "J" },
                    { text: "Ghét thói quen lặp lại và thích sự ngẫu hứng", type: "P" }
                ]
            },
            {
                text: "Trong quá trình ra quyết định, bạn thích gì hơn?",
                answers: [
                    { text: "Muốn đi đến kết luận và chốt vấn đề để chuyển sang việc khác", type: "J" },
                    { text: "Muốn tìm hiểu các lựa chọn khác nhau và thu thập thêm thông tin", type: "P" }
                ]
            }
        ]
    }
];

// Dữ liệu 16 loại tính cách MBTI
const personalityTypes = {
    "INTJ": {
        name: "Kiến trúc sư (The Architect)",
        description: "INTJ là những người có tư duy độc đáo, hay hoài nghi và rất độc lập. Họ đề cao trí tuệ, kiến thức và có tiêu chuẩn rất cao cho bản thân. INTJ luôn tìm cách cải tiến mọi thứ và đưa ra các ý tưởng chiến lược.",
        careers: ["Nhà vi sinh học / Nghiên cứu khoa học", "Kỹ sư (Phần mềm, Xây dựng...)", "Nhà kinh tế học", "Quản lý bảo tàng / Giám tuyển nghệ thuật", "Biên tập viên"]
    },
    "INTP": {
        name: "Nhà lý luận (The Logician)",
        description: "INTP được ví như những triết gia bẩm sinh. Họ bị cuốn hút bởi các giải thích logic và sự suy ngẫm. Họ có khả năng tập trung cao độ để giải quyết các vấn đề hóc búa và trừu tượng.",
        careers: ["Giáo sư / Giảng viên đại học", "Nhà toán học", "Nhạc sĩ / Nhà soạn nhạc", "Lập trình viên Web / Phần mềm", "Nhà nghiên cứu khoa học"]
    },
    "ENTJ": {
        name: "Nhà lãnh đạo (The Commander)",
        description: "ENTJ là người quả quyết, thẳng thắn với tư duy chiến lược. Họ hướng tới mục tiêu, có khả năng lập kế hoạch dài hạn một cách dễ dàng. Họ là những lãnh đạo logic, thích tổ chức và chia sẻ kiến thức.",
        careers: ["Bác sĩ (thường là các vị trí quản lý y tế)", "Quản trị kinh doanh / CEO", "Chính trị gia", "Doanh nhân (Khởi nghiệp)", "Chuyên gia ngân hàng / Tài chính"]
    },
    "ENTP": {
        name: "Người tranh luận (The Debator)",
        description: "ENTP là những người giải quyết vấn đề nhanh nhạy và thích nghi tốt. Họ luôn tìm kiếm sự đổi mới và các giải pháp sáng tạo cho những thách thức. Họ là những chiến lược gia tháo vát.",
        careers: ["Luật sư tranh tụng", "Chuyên gia hoạch định tài chính", "Nhà tâm lý học", "Cố vấn Marketing", "Diễn viên"]
    },
    "INFJ": {
        name: "Người bênh vực (The Advocate)",
        description: "INFJ là người có nguyên tắc sống mạnh mẽ và coi trọng ý nghĩa của các mối quan hệ. Luôn mong muốn giúp người khác phát huy tiềm năng, họ rất nhạy cảm và sâu sắc. Họ phù hợp với các vị trí có thể đóng góp cho sự phát triển của người khác thông qua sự thấu cảm.",
        careers: ["Nhà trị liệu tâm lý", "Nhà văn / Người viết nội dung", "Bác sĩ thú y", "Thủ thư (Quản lý thư viện)", "Giáo viên"]
    },
    "INFP": {
        name: "Người Hòa giải (The Mediator)",
        description: "INFP luôn quan tâm và chấp nhận người khác. Họ linh hoạt, sáng tạo và nhanh chóng nhìn thấy các khả năng thay đổi. Là những người sống lý tưởng, họ tìm kiếm một công việc mang lại ý nghĩa nhân văn sâu sắc.",
        careers: ["Nhiếp ảnh gia", "Kiến trúc sư", "Copywriter (Người viết quảng cáo)", "Quản lý nhân sự (HR)", "Chuyên gia sức khỏe tâm thần"]
    },
    "ENFJ": {
        name: "Nhân vật chính (The Protagonist)",
        description: "ENFJ là những người đáng tin cậy, thấu cảm và có khả năng nhìn thấy tiềm năng ở người khác. Họ là những nhà lãnh đạo biết hỗ trợ, luôn khuyến khích mọi người phát triển.",
        careers: ["Nhà hoạt động xã hội / Tôn giáo", "Nhà ngoại giao", "Nhân viên công tác xã hội", "Chuyên viên PR (Quan hệ công chúng)", "Cố vấn hướng nghiệp"]
    },
    "ENFP": {
        name: "Nhà hoạt động (The Campaigner)",
        description: "ENFP ấm áp, giàu trí tưởng tượng và nhìn thấy cuộc sống đầy ắp những khả năng. Họ nhiệt tình, sáng tạo và có khả năng nhận ra các quy luật/xu hướng rất nhanh.",
        careers: ["Kiến trúc sư", "Phóng viên / Nhà báo", "Nhạc sĩ", "Nhà thiết kế (Đồ họa, Nội thất...)", "Huấn luyện viên cá nhân (PT)"]
    },
    "ISTJ": {
        name: "Nhà tổ chức (The Logistician)",
        description: "ISTJ là những người thực tế, tỉ mỉ và đáng tin cậy. Họ làm việc hướng tới mục tiêu một cách kiên định, yêu thích trật tự và sự ngăn nắp. Họ làm việc rất tốt với số liệu và cực kỳ chú ý đến chi tiết.",
        careers: ["Quản trị hệ thống (System Administrator)", "Kế toán / Kiểm toán viên (CPA)", "Quản lý chuỗi cung ứng (Supply Chain Manager)", "Chuyên viên phân tích nghiệp vụ (Business Analyst)", "Chuyên viên xử lý dữ liệu"]
    },
    "ISFJ": {
        name: "Người bảo vệ (The Defender)",
        description: "ISFJ là những người tận tâm, chu đáo, luôn đề cao lòng trung thành và các giá trị truyền thống. Họ rất có trách nhiệm trong công việc và có khả năng phân tích tốt. Họ thường làm việc hiệu quả trong các nhóm nhỏ hoặc công việc độc lập.",
        careers: ["Giáo viên mầm non", "Nhà hoạt động tôn giáo / xã hội", "Nhân viên tài chính", "Trợ lý luật sư (Paralegal)", "Chuyên viên nghiên cứu phân tích"]
    },
    "ESTJ": {
        name: "Người điều hành (The Executive)",
        description: "ESTJ là những người quyết đoán, thực tế và coi trọng sự thật. Họ có kỹ năng tổ chức tuyệt vời để hoàn thành công việc. Họ thích hành động nhanh, hiệu quả và tuân thủ các quy tắc, trật tự.",
        careers: ["Bếp trưởng", "Luật sư", "Quản lý dự án (Project Manager)", "Thẩm phán", "Quản lý khách sạn"]
    },
    "ESFJ": {
        name: "Người lãnh sự (The Consul)",
        description: "ESFJ là người giàu lòng trắc ẩn, thích tạo ra bầu không khí hòa thuận và luôn muốn giúp đỡ người khác. Họ có ý thức rõ ràng về đúng sai và thích làm việc thông qua sự hợp tác.",
        careers: ["Y tá / Điều dưỡng", "Quản lý văn phòng / Hành chính", "Chuyên viên hỗ trợ kỹ thuật", "Bác sĩ nhi khoa", "Giáo viên"]
    },
    "ISTP": {
        name: "Người bậc thầy (The Virtuoso)",
        description: "ISTP là người khách quan, khoan dung và thích nghi tốt với các tình huống khác nhau. Họ thích hành động, ra quyết định nhanh và giải quyết vấn đề bằng cách quan sát thực tế. Họ làm việc tốt dưới áp lực cao.",
        careers: ["Cảnh sát / Công an", "Kỹ sư cơ khí / Thợ máy", "Kỹ sư xây dựng", "Chuyên gia pháp y", "Thợ mộc / Thiết kế nội thất gỗ"]
    },
    "ISFP": {
        name: "Người phiêu lưu (The Adventurer)",
        description: "ISFP là những người nhạy cảm, tốt bụng và thích tận hưởng hiện tại. Họ thường có thiên hướng nghệ thuật và tìm kiếm sự hài hòa trong môi trường sống. Họ trung thành và rất chú ý đến chi tiết.",
        careers: ["Thợ kim hoàn / Chế tác đá quý", "Chuyên gia nhãn khoa / Kính mắt", "Nhà khảo cổ học", "Nhà thiết kế thời trang", "Chuyên gia trị liệu nghề nghiệp"]
    },
    "ESTP": {
        name: "Người doanh nhân (The Entrepreneur)",
        description: "ESTP là những người ngẫu hứng, thích hành động hơn là ngồi lý thuyết. Họ táo bạo, dám mạo hiểm và chú trọng vào kết quả tức thì. Họ học hỏi tốt nhất thông qua việc bắt tay vào làm.",
        careers: ["Sĩ quan quân đội", "Vận động viên chuyên nghiệp", "Lính cứu hỏa", "Nhân viên cấp cứu", "Giám đốc sáng tạo"]
    },
    "ESFP": {
        name: "Người Trình Diễn (The Entertainer)",
        description: "ESFP là những người hướng ngoại, lạc quan và ham vui. Họ thích kết nối với mọi người và tận hưởng những trải nghiệm mới mẻ. Họ có khả năng thuyết phục tốt và rất linh hoạt.",
        careers: ["Bartender / Barista", "Chuyên viên tổ chức sự kiện", "Nghệ sĩ biểu diễn", "Đại diện kinh doanh (Sales)", "Tiếp viên hàng không"]
    }
};

// Biến toàn cục
let currentPartIndex = 0;
let userAnswers = {}; // Lưu theo format {partId: {questionIndex: answerType}}
let studentName = '';

// Khởi tạo ứng dụng
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Thiết lập event listeners
    document.getElementById('startBtn').addEventListener('click', startQuiz);
    document.getElementById('prevPartBtn').addEventListener('click', previousPart);
    document.getElementById('nextPartBtn').addEventListener('click', nextPart);
    document.getElementById('finishBtn').addEventListener('click', finishQuiz);
    document.getElementById('restartBtn').addEventListener('click', restartQuiz);

    // Khởi tạo dữ liệu
    initializeUserAnswers();
    
    // Load dữ liệu từ session nếu có
    loadFromSession();
}

function initializeUserAnswers() {
    mbtiData.forEach(part => {
        userAnswers[part.id] = {};
        for (let i = 0; i < part.questions.length; i++) {
            userAnswers[part.id][i] = null;
        }
    });
}

function startQuiz() {
    studentName = document.getElementById('studentName').value.trim();
    
    if (!studentName) {
        alert('Vui lòng nhập họ tên của bạn!');
        return;
    }
    
    // Reset dữ liệu
    currentPartIndex = 0;
    initializeUserAnswers();
    
    // Lưu vào session
    saveToSession();
    
    // Chuyển màn hình
    showScreen('quizScreen');
    
    // Hiển thị phần đầu tiên
    displayPart();
    updateNavigation();
}

function showScreen(screenId) {
    // Ẩn tất cả màn hình
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Hiển thị màn hình được chọn
    document.getElementById(screenId).classList.add('active');
}

function displayPart() {
    const part = mbtiData[currentPartIndex];
    
    // Cập nhật tiêu đề phần
    document.getElementById('partTitle').textContent = part.name;
    document.getElementById('partDescription').textContent = part.description;
    
    // Tạo danh sách câu hỏi
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = '';
    
    part.questions.forEach((question, index) => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.innerHTML = `<span class="question-number">${index + 1}.</span>${question.text}`;
        
        const answerOptions = document.createElement('div');
        answerOptions.className = 'answer-options';
        
        question.answers.forEach((answer, answerIndex) => {
            const answerOption = document.createElement('label');
            answerOption.className = 'answer-option';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question_${part.id}_${index}`;
            radio.value = answer.type;
            radio.className = 'answer-radio';
            
            // Kiểm tra nếu đã có đáp án
            if (userAnswers[part.id][index] === answer.type) {
                radio.checked = true;
                answerOption.classList.add('selected');
            }
            
            radio.addEventListener('change', () => {
                selectAnswer(part.id, index, answer.type);
                // Cập nhật UI
                document.querySelectorAll(`input[name="question_${part.id}_${index}"]`).forEach(r => {
                    r.closest('.answer-option').classList.remove('selected');
                });
                answerOption.classList.add('selected');
            });
            
            const answerText = document.createElement('span');
            answerText.className = 'answer-text';
            answerText.textContent = answer.text;
            
            answerOption.appendChild(radio);
            answerOption.appendChild(answerText);
            answerOptions.appendChild(answerOption);
        });
        
        questionItem.appendChild(questionText);
        questionItem.appendChild(answerOptions);
        questionsList.appendChild(questionItem);
    });
    
    updateNavigationButtons();
}

function selectAnswer(partId, questionIndex, answerType) {
    userAnswers[partId][questionIndex] = answerType;
    saveToSession();
    updateNavigation();
}

function previousPart() {
    if (currentPartIndex > 0) {
        currentPartIndex--;
        displayPart();
        updateNavigation();
    }
}

function nextPart() {
    if (currentPartIndex < mbtiData.length - 1) {
        currentPartIndex++;
        displayPart();
        updateNavigation();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevPartBtn');
    const nextBtn = document.getElementById('nextPartBtn');
    const finishBtn = document.getElementById('finishBtn');
    
    prevBtn.disabled = currentPartIndex === 0;
    
    if (currentPartIndex === mbtiData.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        finishBtn.style.display = 'none';
    }
}

function updateNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach((item, index) => {
        if (index < mbtiData.length) {
            item.classList.remove('active', 'completed');
            
            if (index === currentPartIndex) {
                item.classList.add('active');
            } else if (isPartCompleted(index)) {
                item.classList.add('completed');
            }
            
            // Add click handler for navigation
            item.onclick = () => {
                if (index < mbtiData.length) {
                    currentPartIndex = index;
                    displayPart();
                    updateNavigation();
                }
            };
        }
    });
}

function isPartCompleted(partIndex) {
    const part = mbtiData[partIndex];
    const partAnswers = userAnswers[part.id];
    
    for (let i = 0; i < part.questions.length; i++) {
        if (partAnswers[i] === null) {
            return false;
        }
    }
    return true;
}

function finishQuiz() {
    // Kiểm tra các phần chưa hoàn thành
    const incompleteParts = [];
    
    mbtiData.forEach((part, index) => {
        if (!isPartCompleted(index)) {
            incompleteParts.push(part.name);
        }
    });
    
    if (incompleteParts.length > 0) {
        const proceed = confirm(`Bạn chưa hoàn thành: ${incompleteParts.join(', ')}. Bạn có muốn hoàn thành bài test không?`);
        if (!proceed) return;
    }
    
    // Tính toán kết quả MBTI
    const results = calculateMBTIResults();
    
    // Lưu kết quả
    sessionStorage.setItem('mbtiResults', JSON.stringify(results));
    
    // Hiển thị kết quả
    displayMBTIResults(results);
    
    // Chuyển màn hình
    showScreen('resultScreen');
}

function calculateMBTIResults() {
    const scores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    
    // Đếm điểm cho từng chiều
    mbtiData.forEach(part => {
        const partAnswers = userAnswers[part.id];
        part.questions.forEach((question, index) => {
            const answer = partAnswers[index];
            if (answer) {
                scores[answer]++;
            }
        });
    });
    
    // Xác định loại tính cách
    const personality = 
        (scores.E >= scores.I ? 'E' : 'I') +
        (scores.S >= scores.N ? 'S' : 'N') +
        (scores.T >= scores.F ? 'T' : 'F') +
        (scores.J >= scores.P ? 'J' : 'P');
    
    // Tính phần trăm cho từng chiều
    const dimensions = [
        {
            pair: ['E', 'I'],
            dominant: scores.E >= scores.I ? 'E' : 'I',
            percentage: Math.round((Math.max(scores.E, scores.I) / (scores.E + scores.I)) * 100)
        },
        {
            pair: ['S', 'N'], 
            dominant: scores.S >= scores.N ? 'S' : 'N',
            percentage: Math.round((Math.max(scores.S, scores.N) / (scores.S + scores.N)) * 100)
        },
        {
            pair: ['T', 'F'],
            dominant: scores.T >= scores.F ? 'T' : 'F', 
            percentage: Math.round((Math.max(scores.T, scores.F) / (scores.T + scores.F)) * 100)
        },
        {
            pair: ['J', 'P'],
            dominant: scores.J >= scores.P ? 'J' : 'P',
            percentage: Math.round((Math.max(scores.J, scores.P) / (scores.J + scores.P)) * 100)
        }
    ];
    
    return {
        studentName,
        personality,
        scores,
        dimensions,
        personalityData: personalityTypes[personality]
    };
}

function displayMBTIResults(results) {
    document.getElementById('resultName').textContent = results.studentName;
    document.getElementById('personalityCode').textContent = results.personality;
    document.getElementById('personalityName').textContent = results.personalityData.name;
    
    // Hiển thị phân tích từng chiều
    const breakdownContainer = document.getElementById('typeBreakdown');
    breakdownContainer.innerHTML = '';
    
    const dimensionNames = {
        'E': 'Hướng ngoại',
        'I': 'Hướng nội', 
        'S': 'Tri giác',
        'N': 'Trực giác',
        'T': 'Lý trí',
        'F': 'Cảm xúc',
        'J': 'Nguyên tắc',
        'P': 'Linh hoạt'
    };
    
    results.dimensions.forEach(dimension => {
        const dimensionDiv = document.createElement('div');
        dimensionDiv.className = `dimension-result ${dimension.dominant.toLowerCase()}${dimension.dominant === 'E' ? 'xtrovert' : dimension.dominant === 'I' ? 'ntrovert' : dimension.dominant === 'S' ? 'ensing' : dimension.dominant === 'N' ? 'tuitive' : dimension.dominant === 'T' ? 'hinking' : dimension.dominant === 'F' ? 'eeling' : dimension.dominant === 'J' ? 'udging' : 'erceiving'}`;
        
        dimensionDiv.innerHTML = `
            <div class="dimension-letter">${dimension.dominant}</div>
            <div class="dimension-name">${dimensionNames[dimension.dominant]}</div>
            <div class="dimension-percentage">${dimension.percentage}%</div>
        `;
        
        breakdownContainer.appendChild(dimensionDiv);
    });
    
    // Hiển thị mô tả
    document.getElementById('typeDescription').innerHTML = `
        <h3>Mô tả tính cách:</h3>
        <p>${results.personalityData.description}</p>
    `;
    
    // Hiển thị gợi ý nghề nghiệp
    const careersContainer = document.getElementById('careerSuggestions');
    careersContainer.innerHTML = `
        <h3>Gợi ý nghề nghiệp:</h3>
        <div class="career-list">
            ${results.personalityData.careers.map(career => 
                `<div class="career-item">${career}</div>`
            ).join('')}
        </div>
    `;
}

function restartQuiz() {
    // Xóa dữ liệu session
    clearSession();
    
    // Reset các biến
    currentPartIndex = 0;
    initializeUserAnswers();
    studentName = '';
    
    // Reset form
    document.getElementById('studentName').value = '';
    
    // Chuyển về màn hình giới thiệu
    showScreen('introScreen');
}

// Quản lý Session Storage
function saveToSession() {
    const sessionData = {
        studentName,
        currentPartIndex,
        userAnswers
    };
    
    sessionStorage.setItem('mbtiSession', JSON.stringify(sessionData));
}

function loadFromSession() {
    const sessionData = sessionStorage.getItem('mbtiSession');
    
    if (sessionData) {
        const data = JSON.parse(sessionData);
        
        if (data.studentName) {
            const restore = confirm('Có phiên làm bài trước đó chưa hoàn thành. Bạn có muốn tiếp tục không?');
            
            if (restore) {
                studentName = data.studentName;
                currentPartIndex = data.currentPartIndex || 0;
                userAnswers = data.userAnswers || {};
                
                document.getElementById('studentName').value = studentName;
                showScreen('quizScreen');
                displayPart();
                updateNavigation();
                return;
            }
        }
    }
    
    clearSession();
}

function clearSession() {
    sessionStorage.removeItem('mbtiSession');
    sessionStorage.removeItem('mbtiResults');
}

// Xử lý sự kiện trước khi rời khỏi trang
window.addEventListener('beforeunload', function(e) {
    if (studentName && document.getElementById('quizScreen').classList.contains('active')) {
        saveToSession();
        e.preventDefault();
        e.returnValue = 'Bạn có chắc muốn rời khỏi trang? Tiến trình làm bài sẽ được lưu lại.';
    }
});