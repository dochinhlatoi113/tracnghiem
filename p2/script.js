// MIPQ - Trắc nghiệm Trí thông minh đa diện (Multiple Intelligences Profiling Questionnaire)
// Dựa trên lý thuyết của Howard Gardner

// Dữ liệu 8 loại trí thông minh với 8 câu hỏi mỗi loại (tổng 64 câu)
const mipqData = [
    {
        id: "verbal",
        name: "Verbal/Linguistic (Thông minh Ngôn ngữ)",
        description: "Khả năng sử dụng ngôn ngữ hiệu quả, cả về mặt nói và viết",
        detailDescription: "Người có chỉ số cao ở trí thông minh này có khả năng ngôn ngữ nổi trội (trong cả viết lẫn nói) và thường tự đánh giá bản thân có khả năng học tập và giải trí bằng các trò chơi có hình ảnh và ngôn ngữ.",
        questions: [
            "Tôi có thể dùng vốn từ phong phú để diễn đạt bản thân.",
            "Tôi cảm thấy thoải mái khi làm việc với ngôn ngữ và từ ngữ.",
            "Tôi thích chơi giải ô chữ và các trò chơi đố chữ.",
            "Tôi có xu hướng nhớ chính xác những gì người khác nói với mình.",
            "Tôi thích tham gia vào các cuộc tranh luận và/hoặc thảo luận.",
            "Tôi thấy dễ dàng trong việc giải thích mọi thứ cho người khác.",
            "Tôi thích viết nhật ký và/hoặc viết truyện, viết báo.",
            "Tôi thích đọc sách."
        ]
    },
    {
        id: "logical",
        name: "Logical/Mathematical (Thông minh Logic/Toán học)",
        description: "Khả năng sử dụng lý luận logic và toán học để giải quyết vấn đề",
        detailDescription: "Trí thông minh này bao gồm khả năng toán học (hoặc khả năng học tốt các môn khoa học tự nhiên có liên quan đến toán học nói chung) và kỹ năng tư duy logic và hệ thống hoá trong giải quyết vấn đề.",
        questions: [
            "Tôi làm việc hiệu quả nhất trong một không gian ngăn nắp, có tổ chức.",
            "Tôi thích toán học và làm việc với các con số.",
            "Tôi thường lập danh sách \"những việc cần làm\".",
            "Tôi thích chơi các trò thách đố trí não và giải đố tư duy logic.",
            "Tôi thích đặt các câu hỏi \"Tại sao?\".",
            "Tôi làm việc tốt nhất khi có kế hoạch ngày hoặc thời gian biểu cụ thể.",
            "Tôi nắm bắt nhanh mối quan hệ nguyên nhân - kết quả.",
            "Tôi luôn làm mọi việc theo trình tự từng bước một."
        ]
    },
    {
        id: "visual",
        name: "Visual/Spatial (Thông minh Thị giác/Không gian)",
        description: "Khả năng hình dung, tư duy không gian và làm việc với hình ảnh",
        detailDescription: "Trí thông minh này đề cập đến khả năng hình dung, tư duy, và làm việc với các vật thể đa chiều.",
        questions: [
            "Tôi hiểu về cách phối màu và biết những màu nào đi cùng nhau thì đẹp.",
            "Tôi thích chơi ghép hình, mê cung và/hoặc các trò đố vui thị giác khác.",
            "Tôi đọc hiểu biểu đồ và bản đồ một cách dễ dàng.",
            "Tôi có khả năng định hướng tốt.",
            "Tôi thích quan sát bối cảnh và các hoạt động trong phim ảnh.",
            "Tôi là người có óc quan sát. Tôi thường thấy những chi tiết mà người khác bỏ lỡ.",
            "Tôi có thể đoán trước các nước đi và hậu quả trong một chiến thuật trò chơi (ví dụ: cảm giác trong khúc côn cầu, cờ vua).",
            "Tôi có thể hình dung các khung cảnh trong đầu khi nhớ lại sự việc."
        ]
    },
    {
        id: "interpersonal",
        name: "Interpersonal (Thông minh Tương tác/Xã hội)",
        description: "Khả năng hiểu và tương tác hiệu quả với người khác",
        detailDescription: "Trí thông minh này khám phá khả năng cảm nhận nhạy bén và kết thân nhanh chóng của con người trong các mối tương quan xã hội.",
        questions: [
            "Tôi có thể cảm nhận được tâm trạng và cảm xúc của người khác.",
            "Tôi làm việc hiệu quả nhất khi tương tác với mọi người.",
            "Tôi thích các môn thể thao đồng đội hơn là thể thao cá nhân.",
            "Tôi có thể đứng ra giải quyết (hòa giải) các cuộc tranh cãi giữa bạn bè.",
            "Tôi thích các hoạt động nhóm hơn là làm một mình.",
            "Tôi thích tìm hiểu về các nền văn hóa khác nhau.",
            "Tôi thích các sự kiện xã hội như tiệc tùng.",
            "Tôi thích chia sẻ ý tưởng và cảm xúc của mình với người khác."
        ]
    },
    {
        id: "musical",
        name: "Musical (Thông minh Âm nhạc)",
        description: "Khả năng nhạy cảm với âm nhạc, nhịp điệu và âm thanh",
        detailDescription: "Các câu trong thang đo này đo lường khả năng khi cá nhân nghe và tạo ra âm nhạc.",
        questions: [
            "Tôi thường tự phát nhạc trong đầu mình.",
            "Tâm trạng của tôi thay đổi khi tôi nghe nhạc.",
            "Tôi dễ dàng bắt nhịp/theo nhịp của bài nhạc.",
            "Tôi có thể nhận ra (phân biệt) các loại nhạc cụ khác nhau khi nghe một bản nhạc.",
            "Tôi thường giữ nhịp (gõ tay/chân) khi nhạc đang phát.",
            "Tôi có thể nhận ra ngay khi một nốt nhạc bị lệch tông (phô).",
            "Tôi thấy dễ dàng khi tham gia vào các hoạt động âm nhạc.",
            "Tôi có thể ghi nhớ các đoạn nhạc một cách dễ dàng."
        ]
    },
    {
        id: "naturalistic",
        name: "Naturalistic (Thông minh Thiên nhiên)",
        description: "Khả năng nhận biết và phân loại các yếu tố trong tự nhiên",
        detailDescription: "Trí thông minh Môi trường tự nhiên hướng đến cảm giác chúng ta trân trọng khi hòa mình vào tự nhiên, quan sát những chuyển biến và kết nối với môi trường, yêu thương và đam mê hiểu biết và ghi nhớ về động vật và tự nhiên, và nhạy cảm trước những gì xoay quanh hệ sinh thái.",
        questions: [
            "Ô nhiễm môi trường làm tôi tức giận.",
            "Tôi nhận ra những điểm giống và khác nhau ở cây cối, hoa cỏ và các vật thể tự nhiên khác.",
            "Tôi có cảm xúc rất mạnh mẽ về việc bảo vệ môi trường.",
            "Tôi thích xem các chương trình về thiên nhiên trên tivi.",
            "Tôi tham gia vào các ngày hội làm sạch môi trường.",
            "Tôi thích trồng trọt và chăm sóc vườn tược.",
            "Tôi thích câu cá, đi bộ đường dài (trong rừng) và ngắm chim.",
            "Khi ra trường, tôi hy vọng được làm việc liên quan đến động thực vật."
        ]
    },
    {
        id: "bodily",
        name: "Body/Kinesthetic (Thông minh Vận động/Cơ thể)",
        description: "Khả năng sử dụng cơ thể để biểu đạt ý tưởng và cảm xúc",
        detailDescription: "Trí thông minh này đặc trưng bởi khả năng thao tác khéo léo của tay chân và điều phối nhịp nhàng các chuyển động cơ thể.",
        questions: [
            "Tôi thích cử động, gõ nhịp hoặc ngọ nguậy khi ngồi một chỗ.",
            "Tôi thích tham gia các môn thể thao vận động tích cực.",
            "Tôi tò mò về cảm giác của mọi vật và có xu hướng chạm vào đồ vật để kiểm tra kết cấu của chúng.",
            "Tôi phối hợp cơ thể tốt (khéo léo).",
            "Tôi thích làm việc bằng đôi tay của mình.",
            "Tôi thích trực tiếp tham gia vận động hơn là chỉ ngồi xem.",
            "Tôi hiểu rõ nhất thông qua thực hành (ví dụ: chạm, di chuyển và tương tác).",
            "Tôi thích suy nghĩ về các vấn đề trong khi đi bộ hoặc chạy bộ."
        ]
    },
    {
        id: "intrapersonal",
        name: "Intrapersonal (Thông minh Nội tâm)",
        description: "Khả năng hiểu bản thân và quản lý cảm xúc của mình",
        detailDescription: "Trí thông minh nội tâm bao gồm hai thành phần là (1) tự suy ngẫm: đo lường khả năng phản chiếu - về các vấn đề quan trọng xảy ra trong đời, cũng như (2) những chủ đề về tâm lý và triết học.",
        questions: [
            "Tôi hiểu rõ bản thân mình.",
            "Tôi có một vài người bạn thân thiết (chất lượng hơn số lượng).",
            "Tôi có quan điểm mạnh mẽ về các vấn đề gây tranh cãi.",
            "Tôi làm việc tốt nhất khi được tự chủ tốc độ (làm theo nhịp độ của riêng mình).",
            "Tôi không dễ bị ảnh hưởng bởi ý kiến người khác.",
            "Tôi hiểu rõ cảm xúc của mình và cách tôi sẽ phản ứng với các tình huống.",
            "Tôi thường đặt câu hỏi về các giá trị sống và niềm tin.",
            "Tôi thích làm việc độc lập một mình."
        ]
    }
];

// Biến toàn cục
let currentQuestionIndex = 0;
let userAnswers = {}; // Lưu theo format {questionGlobalIndex: score}
let studentName = '';
let totalQuestions = 0;

// Khởi tạo ứng dụng
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Tính tổng số câu hỏi
    totalQuestions = mipqData.reduce((sum, type) => sum + type.questions.length, 0);
    
    // Cập nhật UI
    document.getElementById('totalQuestions').textContent = totalQuestions;
    
    // Thiết lập event listeners
    setupEventListeners();
    
    // Khởi tạo dữ liệu
    initializeAnswers();
    
    // Load dữ liệu từ session nếu có
    loadFromSession();
}

function setupEventListeners() {
    document.getElementById('startBtn').addEventListener('click', startQuiz);
    document.getElementById('prevBtn').addEventListener('click', previousQuestion);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('finishBtn').addEventListener('click', finishQuiz);
    document.getElementById('restartBtn').addEventListener('click', restartQuiz);
    document.getElementById('printBtn').addEventListener('click', printResults);
    
    // Event listener cho rating options
    document.querySelectorAll('.rating-option input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', selectAnswer);
    });
    
    // Event listener cho navigation items
    document.querySelectorAll('.nav-item').forEach((item, index) => {
        item.addEventListener('click', () => navigateToType(index));
    });
}

function initializeAnswers() {
    // Khởi tạo mảng câu trả lời
    for (let i = 0; i < totalQuestions; i++) {
        userAnswers[i] = null;
    }
}

function startQuiz() {
    studentName = document.getElementById('studentName').value.trim();
    
    if (!studentName) {
        alert('Vui lòng nhập họ tên của bạn!');
        return;
    }
    
    // Reset dữ liệu
    currentQuestionIndex = 0;
    initializeAnswers();
    
    // Cập nhật hiển thị tên
    document.getElementById('studentNameDisplay').textContent = studentName;
    
    // Lưu vào session
    saveToSession();
    
    // Chuyển màn hình
    showScreen('quizScreen');
    
    // Hiển thị câu hỏi đầu tiên
    displayQuestion();
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

function displayQuestion() {
    const questionData = getQuestionData(currentQuestionIndex);
    
    if (!questionData) return;
    
    // Cập nhật thông tin câu hỏi
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('sectionTitle').textContent = questionData.type.name;
    document.getElementById('sectionDescription').textContent = questionData.type.description;
    document.getElementById('questionNumber').textContent = `${questionData.questionInType + 1}.`;
    document.getElementById('questionContent').textContent = questionData.question;
    
    // Reset và cập nhật rating options
    const radios = document.querySelectorAll('.rating-option input[type="radio"]');
    radios.forEach((radio, index) => {
        radio.name = `question_${currentQuestionIndex}`;
        radio.id = `rating${5-index}_${currentQuestionIndex}`;
        radio.checked = false;
        
        // Cập nhật label
        const label = radio.nextElementSibling;
        label.setAttribute('for', radio.id);
    });
    
    // Chọn đáp án đã lưu (nếu có)
    if (userAnswers[currentQuestionIndex] !== null) {
        const selectedRadio = document.querySelector(`input[name="question_${currentQuestionIndex}"][value="${userAnswers[currentQuestionIndex]}"]`);
        if (selectedRadio) {
            selectedRadio.checked = true;
        }
    }
    
    // Cập nhật navigation buttons
    updateNavigationButtons();
    
    // Cập nhật progress bar
    updateProgressBar();
}

function getQuestionData(globalIndex) {
    let currentIndex = 0;
    
    for (let typeIndex = 0; typeIndex < mipqData.length; typeIndex++) {
        const type = mipqData[typeIndex];
        
        if (globalIndex < currentIndex + type.questions.length) {
            return {
                type: type,
                typeIndex: typeIndex,
                questionInType: globalIndex - currentIndex,
                question: type.questions[globalIndex - currentIndex]
            };
        }
        
        currentIndex += type.questions.length;
    }
    
    return null;
}

function selectAnswer(event) {
    const value = parseInt(event.target.value);
    userAnswers[currentQuestionIndex] = value;
    
    // Lưu vào session
    saveToSession();
    
    // Cập nhật navigation
    updateNavigation();
    
    // Tự động chuyển câu sau một khoảng thời gian ngắn
    setTimeout(() => {
        if (currentQuestionIndex < totalQuestions - 1) {
            nextQuestion();
        } else {
            // Câu cuối cùng, hiển thị nút hoàn thành
            updateNavigationButtons();
        }
    }, 300);
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateNavigation();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateNavigation();
    }
}

function navigateToType(typeIndex) {
    // Tính toán câu hỏi đầu tiên của type này
    let questionIndex = 0;
    
    for (let i = 0; i < typeIndex; i++) {
        questionIndex += mipqData[i].questions.length;
    }
    
    currentQuestionIndex = questionIndex;
    displayQuestion();
    updateNavigation();
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');
    
    // Nút Previous
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // Nút Next và Finish
    const hasAnswer = userAnswers[currentQuestionIndex] !== null;
    
    if (currentQuestionIndex === totalQuestions - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = hasAnswer ? 'flex' : 'none';
    } else {
        nextBtn.style.display = 'flex';
        nextBtn.disabled = !hasAnswer;
        finishBtn.style.display = 'none';
    }
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

function updateNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    // Cập nhật trạng thái của từng loại trí thông minh
    let currentGlobalIndex = 0;
    
    mipqData.forEach((type, typeIndex) => {
        const navItem = navItems[typeIndex];
        
        // Đếm số câu đã trả lời trong type này
        let answeredCount = 0;
        for (let i = 0; i < type.questions.length; i++) {
            if (userAnswers[currentGlobalIndex + i] !== null) {
                answeredCount++;
            }
        }
        
        // Cập nhật hiển thị
        const progressText = navItem.querySelector('.nav-progress');
        progressText.textContent = `${answeredCount}/${type.questions.length}`;
        
        // Cập nhật class
        navItem.classList.remove('active', 'completed');
        
        if (currentQuestionIndex >= currentGlobalIndex && currentQuestionIndex < currentGlobalIndex + type.questions.length) {
            navItem.classList.add('active');
        } else if (answeredCount === type.questions.length) {
            navItem.classList.add('completed');
        }
        
        currentGlobalIndex += type.questions.length;
    });
    
    // Cập nhật navigation buttons
    updateNavigationButtons();
}

function finishQuiz() {
    // Kiểm tra câu hỏi chưa trả lời
    const unansweredQuestions = [];
    
    for (let i = 0; i < totalQuestions; i++) {
        if (userAnswers[i] === null) {
            unansweredQuestions.push(i + 1);
        }
    }
    
    if (unansweredQuestions.length > 0) {
        const proceed = confirm(`Bạn chưa trả lời ${unansweredQuestions.length} câu hỏi. Bạn có muốn hoàn thành bài test không?`);
        if (!proceed) return;
    }
    
    // Tính toán kết quả
    const results = calculateMIPQResults();
    
    // Lưu kết quả
    sessionStorage.setItem('mipqResults', JSON.stringify(results));
    
    // Hiển thị kết quả
    displayMIPQResults(results);
    
    // Chuyển màn hình
    showScreen('resultScreen');
}

function calculateMIPQResults() {
    const typeScores = {};
    let currentGlobalIndex = 0;
    
    // Tính điểm cho từng loại trí thông minh
    mipqData.forEach(type => {
        let totalScore = 0;
        let answeredCount = 0;
        
        for (let i = 0; i < type.questions.length; i++) {
            const answer = userAnswers[currentGlobalIndex + i];
            if (answer !== null) {
                totalScore += answer;
                answeredCount++;
            }
        }
        
        typeScores[type.id] = {
            name: type.name,
            score: totalScore,
            maxScore: type.questions.length * 5,
            percentage: answeredCount > 0 ? Math.round((totalScore / (answeredCount * 5)) * 100) : 0,
            answeredCount: answeredCount,
            totalQuestions: type.questions.length,
            description: type.detailDescription
        };
        
        currentGlobalIndex += type.questions.length;
    });
    
    // Sắp xếp theo điểm số từ cao đến thấp
    const sortedTypes = Object.entries(typeScores)
        .sort(([,a], [,b]) => b.score - a.score)
        .map(([id, data], index) => ({
            id,
            rank: index + 1,
            ...data
        }));
    
    return {
        studentName,
        typeScores,
        sortedTypes,
        totalAnswered: Object.values(userAnswers).filter(answer => answer !== null).length,
        totalQuestions
    };
}

function displayMIPQResults(results) {
    // Cập nhật header
    document.getElementById('resultName').textContent = results.studentName;
    
    // Tạo biểu đồ
    createResultChart(results.sortedTypes);
    
    // Tạo bảng kết quả
    createResultTable(results.sortedTypes);
    
    // Tạo mô tả chi tiết
    createResultDescriptions(results.sortedTypes);
}

function createResultChart(sortedTypes) {
    const chartContainer = document.getElementById('chartContainer');
    chartContainer.innerHTML = '';
    
    const colorMap = {
        verbal: '#ff6b6b',
        logical: '#4ecdc4',
        visual: '#45b7d1',
        interpersonal: '#96ceb4',
        musical: '#feca57',
        naturalistic: '#54a0ff',
        bodily: '#ff9ff3',
        intrapersonal: '#a29bfe'
    };
    
    sortedTypes.forEach(type => {
        const chartBar = document.createElement('div');
        chartBar.className = 'chart-bar';
        
        chartBar.innerHTML = `
            <div class="chart-label">${type.name.split('(')[0].trim()}</div>
            <div class="chart-progress">
                <div class="chart-fill ${type.id}" style="width: ${type.percentage}%; background: ${colorMap[type.id] || '#667eea'}"></div>
            </div>
            <div class="chart-value">${type.score}/40 (${type.percentage}%)</div>
        `;
        
        chartContainer.appendChild(chartBar);
    });
}

function createResultTable(sortedTypes) {
    const tbody = document.getElementById('resultTableBody');
    tbody.innerHTML = '';
    
    const getLevelText = (percentage) => {
        if (percentage >= 90) return 'Rất cao';
        if (percentage >= 80) return 'Cao';
        if (percentage >= 70) return 'Khá cao';
        if (percentage >= 60) return 'Trung bình khá';
        if (percentage >= 50) return 'Trung bình';
        if (percentage >= 40) return 'Thấp';
        return 'Rất thấp';
    };
    
    sortedTypes.forEach(type => {
        const row = document.createElement('tr');
        if (type.rank <= 3) {
            row.classList.add(`rank-${type.rank}`);
        }
        
        row.innerHTML = `
            <td><strong>#${type.rank}</strong></td>
            <td>${type.name.replace(/\([^)]*\)/g, '').trim()}</td>
            <td><strong>${type.score}/40</strong></td>
            <td>${type.percentage}%</td>
            <td>${getLevelText(type.percentage)}</td>
        `;
        
        tbody.appendChild(row);
    });
}

function createResultDescriptions(sortedTypes) {
    const container = document.getElementById('resultDescriptions');
    container.innerHTML = '<h3>Mô tả chi tiết các loại trí thông minh</h3>';
    
    const colorMap = {
        verbal: '#ff6b6b',
        logical: '#4ecdc4', 
        visual: '#45b7d1',
        interpersonal: '#96ceb4',
        musical: '#feca57',
        naturalistic: '#54a0ff',
        bodily: '#ff9ff3',
        intrapersonal: '#a29bfe'
    };
    
    // Chỉ hiển thị 3 loại trí thông minh cao nhất
    sortedTypes.slice(0, 3).forEach(type => {
        const descItem = document.createElement('div');
        descItem.className = 'description-item';
        descItem.style.borderLeftColor = colorMap[type.id] || '#667eea';
        descItem.style.background = `linear-gradient(135deg, ${colorMap[type.id]}15, ${colorMap[type.id]}05)`;
        
        descItem.innerHTML = `
            <h4>#${type.rank} - ${type.name} (${type.score}/40 điểm - ${type.percentage}%)</h4>
            <p>${type.description}</p>
        `;
        
        container.appendChild(descItem);
    });
}

function printResults() {
    window.print();
}

function restartQuiz() {
    const confirm = window.confirm('Bạn có chắc muốn làm lại bài test? Tất cả dữ liệu hiện tại sẽ bị xóa.');
    
    if (confirm) {
        // Xóa dữ liệu session
        clearSession();
        
        // Reset các biến
        currentQuestionIndex = 0;
        initializeAnswers();
        studentName = '';
        
        // Reset form
        document.getElementById('studentName').value = '';
        
        // Chuyển về màn hình giới thiệu
        showScreen('introScreen');
    }
}

// Quản lý Session Storage
function saveToSession() {
    const sessionData = {
        studentName,
        currentQuestionIndex,
        userAnswers
    };
    
    sessionStorage.setItem('mipqSession', JSON.stringify(sessionData));
}

function loadFromSession() {
    const sessionData = sessionStorage.getItem('mipqSession');
    
    if (sessionData) {
        const data = JSON.parse(sessionData);
        
        if (data.studentName) {
            const restore = confirm('Có phiên làm bài trước đó chưa hoàn thành. Bạn có muốn tiếp tục không?');
            
            if (restore) {
                studentName = data.studentName;
                currentQuestionIndex = data.currentQuestionIndex || 0;
                userAnswers = data.userAnswers || {};
                
                document.getElementById('studentName').value = studentName;
                document.getElementById('studentNameDisplay').textContent = studentName;
                
                showScreen('quizScreen');
                displayQuestion();
                updateNavigation();
                return;
            }
        }
    }
    
    clearSession();
}

function clearSession() {
    sessionStorage.removeItem('mipqSession');
    sessionStorage.removeItem('mipqResults');
}

// Xử lý sự kiện trước khi rời khỏi trang
window.addEventListener('beforeunload', function(e) {
    if (studentName && document.getElementById('quizScreen').classList.contains('active')) {
        saveToSession();
        e.preventDefault();
        e.returnValue = 'Bạn có chắc muốn rời khỏi trang? Tiến trình làm bài sẽ được lưu lại.';
    }
});

// Animation và hiệu ứng
document.addEventListener('DOMContentLoaded', function() {
    // Thêm animation cho các elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.6s ease-out forwards';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.type-item, .instruction-section, .rating-guide').forEach(el => {
        observer.observe(el);
    });
});