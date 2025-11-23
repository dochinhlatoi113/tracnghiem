// Dữ liệu Holland Test - 6 nhóm với 14 câu hỏi mỗi nhóm
const hollandData = [
    {
        id: "realistic",
        name: "Nhóm Kỹ thuật (Realistic - R)",
        description: "Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...",
        questions: [
            "Tự mua và lắp ráp máy vi tính theo ý mình",
            "Lắp ráp tủ theo hướng dẫn của sách hướng dẫn hoặc trang mạng",
            "Trang điểm cho mình hay cho bạn theo hướng dẫn của sách hướng dẫn hoặc trang mạng",
            "Cắt tỉa cây cảnh",
            "Tháo mở điện thoại di động hay máy tính ra để tìm hiểu",
            "Tham gia một chuyến du lịch thám hiểm (như khám phá hang động, núi rừng)",
            "Chăm sóc vật nuôi",
            "Sửa xe, như xe đạp, xe máy (các lỗi nhỏ)",
            "Làm đồ nội thất",
            "Lắp ráp máy vi tính",
            "Leo núi",
            "Đóng gói đồ đạc vào thùng",
            "Chơi một môn thể thao",
            "Tham gia chuyến đạp xe xuyên quốc gia (từ TPHCM ra Hà Nội, từ Hà Nội vào TPHCM)"
        ],
        des : `Một người có nhóm Kỹ thuật thường thể hiện sở thích như sau: 
            - Thích vận động, khả năng phối hợp tay mắt tốt 
            - Khi đi học, thích những môn học có thực hành nhiều 
            - Thích những hoạt động có tương tác với vật dụng, máy móc, thiết bị (điện thoại, máy tính, máy tính bảng,...), cây cối, động vật, hơn là với con người 
            - Thích hoạt động ngoài trời 
            - Không thích và không giỏi diễn đạt cảm xúc hay ý tưởng của bản thân bằng ngôn từ
            `
                },
    {
        id: "investigative",
        name: "Nhóm Nghiên cứu (Investigative - I)",
        description: "Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...",
        des: `Một người có nhóm Nghiên cứu thường thể hiện sở thích như sau:
            - Dành thời gian quan sát, tìm tòi, học hỏi sâu về các chủ đề mình thích trong và ngoài lớp học
            - Thích học, có khả năng học hỏi từ sách vở, khả năng học sâu và học cao một lĩnh vực yêu thích (bao gồm các môn tự nhiên, xã hội, và các môn tự chọn)
            - Thích phân tích, giải quyết vấn đề mà mình quan tâm
            - Không thích thuyết phục người khác, không ưa nắm vai trò lãnh đạo và không thích xã giao`,
        questions: [
            "Tham quan bảo tàng",
            "Tìm hiểu sự hình thành của các vì sao và vũ trụ",
            "Tìm hiểu về văn hóa một quốc gia mà mình thích",
            "Tìm hiểu về tâm lý con người",
            "Đọc một cuốn sách về tương lai của loài người trong một triệu năm nữa",
            "Đọc sách, báo hay xem trang tin tức về khoa học",
            "Tìm hiểu về cảm xúc con người",
            "Được xem một ca mổ tim",
            "Tìm hiểu nguồn gốc của một dịch bệnh, nguồn gốc loài người, v.v",
            "Đọc các bài báo về ảnh hưởng của AI (trí tuệ nhân tạo) lên nghề nghiệp tương lai",
            "Tìm hiểu về thế giới động vật (qua các kênh tìm hiểu khoa học)",
            "Phát minh xe điện",
            "Tiến hành thí nghiệm hóa học",
            "Nghiên cứu về chế độ dinh dưỡng"
        ]
    },
    {
        id: "artistic",
        name: "Nhóm Nghệ thuật (Artistic – A)",
        description: "Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...",
        des: `Một người có nhóm Nghệ thuật thường thể hiện sở thích như sau:
            - Thích sự tự do, không thể chịu đựng được sự gò ép hay khuôn khổ
            - Có trí tưởng tượng khá phong phú, trực giác mạnh, và khả năng sáng tạo
            - Yêu cái đẹp và dễ bị hấp dẫn bởi cái đẹp (thiên nhiên, con người, đồ vật v.v.)
            - Có một hay nhiều sở thích/năng khiếu sau:
            + Khiếu thẩm mỹ, ăn mặc đẹp, phối màu, vẽ, trang điểm, trang trí, chụp hình, quay phim,...
            + Thuyết trình, hùng biện, sử dụng ngoại ngữ, viết văn, làm thơ, viết kịch, sáng tạo nội dung cho podcast/youtube/tiktok,...
            + Nhảy, hát, đóng kịch, chơi một nhạc cụ, tự quay tiktok/youtube v.v.`,
        questions: [
            "Tạo ra một tác phẩm nghệ thuật, tranh, câu chuyện",
            "Viết truyện ngắn",
            "Chứng tỏ năng lực nghệ thuật của bản thân với người khác (nói lên suy nghĩ/quan điểm qua tác phẩm nghệ thuật)",
            "Chơi trong một ban nhạc",
            "Chỉnh sửa phim",
            "Thuyết trình hoặc thiết kế, theo ý tưởng của mình",
            "Vẽ phim hoạt hình",
            "Hát trong một ban nhạc",
            "Biểu diễn nhảy hiện đại",
            "Dẫn chương trình (MC) cho một sự kiện",
            "Độc thoại hay kể chuyện trên đài phát thanh/phần mềm",
            "Viết kịch bản cho phim hoặc chương trình truyền hình",
            "Chụp ảnh cho các sự kiện trong cuộc sống hoặc sự kiện nghệ thuật",
            "Viết một bài phê bình phim cho bộ phim mình thích/ghét nhất"
        ]
    },
    {
        id: "social",
        name: "Nhóm Xã hội (Social – S)",
        description: "Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...",
        des: `Một người có nhóm Xã hội thường thể hiện sở thích như sau:
            - Thích giúp đỡ người khác và mong muốn "làm cho người xung quanh mình hạnh phúc". Thường ưu tiên nhu cầu của người xung quanh trước nhu cầu của bản thân
            - Để ý và nhạy cảm với cảm xúc của người xung quanh
            - Thích và có thể dạy cho người khác về một chủ đề/môn học nào đó mà họ hiểu rất rõ
            - Thích và rất kiên nhẫn trong việc lắng nghe tâm sự của người khác
            - Tránh né các hoạt động liên quan đến vật dụng hoặc máy móc`,
        questions: [
            "Giúp người khác chọn nghề nghiệp phù hợp",
            "Kết nối hai người bạn với nhau",
            "Dạy cho bạn mình cách giảm cân qua ăn uống đúng cách",
            "Tham gia ngày trái đất bằng cách lượm rác hay tắt điện",
            "Hướng dẫn khách nước ngoài chỗ ăn ngon",
            "Cứu động vật bị bỏ rơi ngoài đường",
            "Tham gia vào một cuộc thảo luận nhóm nhỏ",
            "Kể chuyện cười cho bạn bè nghe",
            "Dạy em nhỏ chơi một trò chơi hay một môn thể thao",
            "Lắng nghe bạn bè tâm sự về vấn đề cá nhân của họ",
            "Giúp bạn bè giải quyết vấn đề liên quan đến tình yêu",
            "Tham gia một chuyến đi từ thiện",
            "Giúp một dự án cộng đồng trong sức của mình",
            "Sẵn sàng giúp thầy cô, bạn bè khi thấy họ cần"
        ]
    },
    {
        id: "enterprising",
        name: "Nhóm Quản lý (Enterprising – E)",
        description: "Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...",
        des: `Một người có nhóm Quản lý thường thể hiện sở thích như sau:
            - Thích và có năng khiếu giao tiếp, lãnh đạo và thuyết phục người khác
            - Thích buôn bán hoặc làm kinh doanh từ nhỏ
            - Thích kiếm tiền và tò mò về đầu tư tài chính nói chung
            - Thường là người quyết đoán, và ra quyết định nhanh gọn
            - Không quá yêu thích các hoạt động hay môn học đòi hỏi sự quan sát kỹ càng, nghiên cứu và phân tích`,
        questions: [
            "Tham gia ban đại diện học sinh ở trường",
            "Làm cán bộ lớp",
            "Bán hàng trực tuyến",
            "Quản lý một cửa hàng trực tuyến",
            "Học về thị trường chứng khoán (bitcoin, cổ phiếu, tiền tệ, v.v.)",
            "Tham gia một khóa học về quản lý tài chính",
            "Tham dự một trại huấn luyện kỹ năng lãnh đạo dành cho lứa tuổi thanh thiếu niên",
            "Lập kế hoạch làm việc cho thành viên nhóm",
            "Kiếm tiền bằng cách kinh doanh trực tuyến",
            "Nói trước đám đông về một đề tài mình thích",
            "Tham gia xây dựng các luật lệ mới cho lớp/trường",
            "Thuyết phục cha mẹ theo ý mình",
            "Tổ chức đi chơi cho một nhóm bạn",
            "Kiếm tiền bằng cách làm thêm"
        ]
    },
    {
        id: "conventional",
        name: "Nhóm Nghiệp vụ (Conventional – C)",
        description: "Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...",
        des: `Một người có nhóm Nghiệp vụ thường thể hiện sở thích như sau:
            - Ngăn nắp, gọn gàng, sạch sẽ, đúng giờ, tự giác và có trách nhiệm
            - Nhạy bén với con số, tiêu tiền cẩn thận, để ý đến chi tiết, tỉ mỉ trong thói quen hàng ngày
            - Thích học và làm việc theo quy tắc, trình tự
            - Dễ bị căng thẳng do cầu toàn hoặc khi mọi việc diễn ra không như kế hoạch
            - Không thích các hoạt động mơ hồ, tự do, hoặc thiếu tính hệ thống`,
        questions: [
            "Mở tài khoản tiết kiệm",
            "Lập kế hoạch chi tiêu hàng tháng",
            "Chuẩn bị ngân sách cho chuyến đi chơi tập thể lớp",
            "Chuẩn bị cho buổi trình bày trước lớp",
            "Lập kế hoạch cho kỳ nghỉ hè/Tết",
            "Đếm và sắp xếp tiền",
            "Sắp xếp lại bàn học",
            "Viết kế hoạch học tập cho học kỳ mới",
            "Hoàn tất bài tập theo đúng hạn được giao",
            "Dò lỗi chính tả cho phụ đề của một phim ưa thích",
            "Học một khóa vi tính văn phòng và biết cách sắp xếp văn bản, thư mục sao cho chỉn chu",
            "Làm thủ quỹ cho lớp",
            "Sắp xếp lại tủ quần áo cá nhân",
            "Giúp ba/mẹ quản lý tiền chợ của gia đình (mua gì, mua khi nào, mua bao nhiêu)"
        ]
    }
];

// Biến toàn cục
let currentGroupIndex = 0;
let userAnswers = {}; // Lưu theo format {groupId: {questionIndex: ratingValue}}
let studentName = '';

// Khởi tạo ứng dụng
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Thiết lập event listeners
    document.getElementById('startBtn').addEventListener('click', startQuiz);
    document.getElementById('prevGroupBtn').addEventListener('click', previousGroup);
    document.getElementById('nextGroupBtn').addEventListener('click', nextGroup);
    document.getElementById('finishBtn').addEventListener('click', finishQuiz);
    document.getElementById('restartBtn').addEventListener('click', restartQuiz);

    // Khởi tạo dữ liệu
    initializeUserAnswers();
    
    // Load dữ liệu từ session nếu có
    loadFromSession();
}

function initializeUserAnswers() {
    hollandData.forEach(group => {
        userAnswers[group.id] = {};
        for (let i = 0; i < group.questions.length; i++) {
            userAnswers[group.id][i] = null;
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
    currentGroupIndex = 0;
    initializeUserAnswers();
    
    // Lưu vào session
    saveToSession();
    
    // Chuyển màn hình
    showScreen('quizScreen');
    
    // Hiển thị nhóm đầu tiên
    displayGroup();
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

function displayGroup() {
    const group = hollandData[currentGroupIndex];
    
    // Cập nhật tiêu đề nhóm
    document.getElementById('groupTitle').textContent = group.name;
    document.getElementById('groupDescription').textContent = group.description;
    
    // Tạo danh sách câu hỏi
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = '';
    
    group.questions.forEach((question, index) => {
        const questionRow = document.createElement('div');
        questionRow.className = 'question-row';
        
        // Tạo nội dung câu hỏi
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.innerHTML = `<span class="question-number">${index + 1}.</span>${question}`;
        
        // Tạo 5 radio buttons cho rating
        const ratings = [];
        for (let i = 0; i < 5; i++) {
            const ratingOption = document.createElement('div');
            ratingOption.className = 'rating-option';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question_${group.id}_${index}`;
            radio.value = i;
            radio.className = 'rating-radio';
            
            // Kiểm tra nếu đã có đáp án
            if (userAnswers[group.id][index] === i) {
                radio.checked = true;
            }
            
            radio.addEventListener('change', () => {
                selectRating(group.id, index, i);
            });
            
            ratingOption.appendChild(radio);
            ratings.push(ratingOption);
        }
        
        // Thêm tất cả vào hàng
        questionRow.appendChild(questionText);
        ratings.forEach(rating => questionRow.appendChild(rating));
        
        questionsList.appendChild(questionRow);
    });
    
    updateNavigationButtons();
}

function selectRating(groupId, questionIndex, rating) {
    userAnswers[groupId][questionIndex] = rating;
    saveToSession();
    updateNavigation();
}

function previousGroup() {
    if (currentGroupIndex > 0) {
        currentGroupIndex--;
        displayGroup();
        updateNavigation();
    }
}

function nextGroup() {
    if (currentGroupIndex < hollandData.length - 1) {
        currentGroupIndex++;
        displayGroup();
        updateNavigation();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevGroupBtn');
    const nextBtn = document.getElementById('nextGroupBtn');
    const finishBtn = document.getElementById('finishBtn');
    
    prevBtn.disabled = currentGroupIndex === 0;
    
    if (currentGroupIndex === hollandData.length - 1) {
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
        if (index < hollandData.length) {
            item.classList.remove('active', 'completed');
            
            if (index === currentGroupIndex) {
                item.classList.add('active');
            } else if (isGroupCompleted(index)) {
                item.classList.add('completed');
            }
            
            // Add click handler for navigation
            item.onclick = () => {
                if (index < hollandData.length) {
                    currentGroupIndex = index;
                    displayGroup();
                    updateNavigation();
                }
            };
        }
    });
}

function isGroupCompleted(groupIndex) {
    const group = hollandData[groupIndex];
    const groupAnswers = userAnswers[group.id];
    
    for (let i = 0; i < group.questions.length; i++) {
        if (groupAnswers[i] === null) {
            return false;
        }
    }
    return true;
}

function finishQuiz() {
    // Kiểm tra các câu hỏi chưa trả lời
    const incompleteGroups = [];
    
    hollandData.forEach((group, index) => {
        if (!isGroupCompleted(index)) {
            incompleteGroups.push(group.name);
        }
    });
    
    if (incompleteGroups.length > 0) {
        const proceed = confirm(`Bạn chưa hoàn thành: ${incompleteGroups.join(', ')}. Bạn có muốn hoàn thành bài test không?`);
        if (!proceed) return;
    }
    
    // Tính toán kết quả
    const results = calculateHollandResults();
    
    // Lưu kết quả
    sessionStorage.setItem('hollandResults', JSON.stringify(results));
    
    // Hiển thị kết quả
    displayHollandResults(results);
    
    // Chuyển màn hình
    showScreen('resultScreen');
}

function calculateHollandResults() {
    const results = {};
    let totalScore = 0;
    // Tính điểm cho từng nhóm
    hollandData.forEach(group => {
        let groupScore = 0;
        let questionCount = 0;
        for (let i = 0; i < group.questions.length; i++) {
            const answer = userAnswers[group.id][i];
            if (answer !== null) {
                groupScore += answer+1; // 0-4 scale
                questionCount++;
            }
        }
        const maxPossible = questionCount * 5; // Maximum score for answered questions
        const percentage = questionCount > 0 ? (groupScore / maxPossible) * 100 : 0;
        results[group.id] = {
            name: group.name,
            score: groupScore,
            maxScore: maxPossible,
            percentage: Math.round(percentage),
            questionCount: questionCount
        };
        
        totalScore += groupScore;
    });
    
    // Sắp xếp theo điểm số
    const sortedResults = Object.entries(results).sort((a, b) => b[1].score - a[1].score);
    
    return {
        studentName,
        results,
        sortedResults,
        totalScore
    };
}

function displayHollandResults(hollandResults) {
    document.getElementById('resultName').textContent = hollandResults.studentName;
    
    // Hiển thị kết quả 6 nhóm
    const resultsContainer = document.getElementById('hollandResults');
    resultsContainer.innerHTML = '';
    
    hollandData.forEach(group => {
        const result = hollandResults.results[group.id];
        
        const groupDiv = document.createElement('div');
        groupDiv.className = `holland-group ${group.id}`;
        
        groupDiv.innerHTML = `
            <div class="group-name">${result.name}</div>
            <div class="group-score">${result.score}</div>
            <div class="score-bar">
            <div class="score-fill" style="width: ${result.percentage}%"></div>
            </div>
            <div class="group-percentage">${result.percentage}%</div>
            <div class="group-description">${group.des || ''}</div>
        `;
        
        resultsContainer.appendChild(groupDiv);
    });
    
    // Hiển thị top 3 nhóm
    const topThreeContainer = document.getElementById('Reesults');
    topThreeContainer.innerHTML = '';
    
    const topThree = hollandResults.sortedResults.slice(0, 6);
    const codes = ['R', 'I', 'A', 'S', 'E', 'C'];
    
    topThree.forEach((item, index) => {
        const [groupId, data] = item;
        const codeIndex = hollandData.findIndex(g => g.id === groupId);
        const code = codes[codeIndex];
        
        const topResult = document.createElement('div');
        topResult.className = 'top-result';
        
        topResult.innerHTML = `
            <div class="code">${code}</div>
            <div class="name">${data.name.split('(')[0].trim()}</div>
        `;
        
        topThreeContainer.appendChild(topResult);
    });
}

function restartQuiz() {
    // Xóa dữ liệu session
    clearSession();
    
    // Reset các biến
    currentGroupIndex = 0;
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
        currentGroupIndex,
        userAnswers
    };
    
    sessionStorage.setItem('hollandSession', JSON.stringify(sessionData));
}

function loadFromSession() {
    const sessionData = sessionStorage.getItem('hollandSession');
    
    if (sessionData) {
        const data = JSON.parse(sessionData);
        
        if (data.studentName) {
            const restore = confirm('Có phiên làm bài trước đó chưa hoàn thành. Bạn có muốn tiếp tục không?');
            
            if (restore) {
                studentName = data.studentName;
                currentGroupIndex = data.currentGroupIndex || 0;
                userAnswers = data.userAnswers || {};
                
                document.getElementById('studentName').value = studentName;
                showScreen('quizScreen');
                displayGroup();
                updateNavigation();
                return;
            }
        }
    }
    
    clearSession();
}

function clearSession() {
    sessionStorage.removeItem('hollandSession');
    sessionStorage.removeItem('hollandResults');
}

// Xử lý sự kiện trước khi rời khỏi trang
window.addEventListener('beforeunload', function(e) {
    if (studentName && document.getElementById('quizScreen').classList.contains('active')) {
        saveToSession();
        e.preventDefault();
        e.returnValue = 'Bạn có chắc muốn rời khỏi trang? Tiến trình làm bài sẽ được lưu lại.';
    }
});