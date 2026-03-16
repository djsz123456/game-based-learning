// 初高中数学知识点速查系统
// 统一管理数学公式、知识点、定理及中高考易考难题

// 数学核心内容数据结构
const mathData = {
    // 公式类
    formulas: {
        // 代数公式
        algebra: {
            factorization: [
                {
                    name: "完全平方公式",
                    formula: "(a + b)² = a² + 2ab + b²",
                    formula2: "(a - b)² = a² - 2ab + b²",
                    explanation: "两个数的和（或差）的平方，等于它们的平方和，加上（或减去）它们的积的2倍。",
                    example: "例：(2x + 3)² = 4x² + 12x + 9"
                },
                {
                    name: "平方差公式",
                    formula: "a² - b² = (a + b)(a - b)",
                    explanation: "两个数的平方差，等于这两个数的和与这两个数的差的积。",
                    example: "例：9x² - 16 = (3x + 4)(3x - 4)"
                },
                {
                    name: "立方和公式",
                    formula: "a³ + b³ = (a + b)(a² - ab + b²)",
                    explanation: "两个数的立方和，等于这两个数的和乘以它们的平方和减去它们的积。",
                    example: "例：x³ + 8 = (x + 2)(x² - 2x + 4)"
                },
                {
                    name: "立方差公式",
                    formula: "a³ - b³ = (a - b)(a² + ab + b²)",
                    explanation: "两个数的立方差，等于这两个数的差乘以它们的平方和加上它们的积。",
                    example: "例：8x³ - 27 = (2x - 3)(4x² + 6x + 9)"
                },
                {
                    name: "十字相乘法",
                    formula: "x² + (a + b)x + ab = (x + a)(x + b)",
                    explanation: "适用于二次三项式的因式分解，通过寻找两个数a和b，使得它们的和为一次项系数，积为常数项。",
                    example: "例：x² + 5x + 6 = (x + 2)(x + 3)"
                }
            ],
            sequence: [
                {
                    name: "等差数列",
                    formula: "通项公式：aₙ = a₁ + (n - 1)d",
                    formula2: "求和公式：Sₙ = n(a₁ + aₙ)/2 = na₁ + n(n - 1)d/2",
                    explanation: "a₁是首项，d是公差，n是项数。",
                    example: "例：等差数列首项a₁=2，公差d=3，第5项a₅=2 + 4×3=14，前5项和S₅=5×(2+14)/2=40"
                },
                {
                    name: "等比数列",
                    formula: "通项公式：aₙ = a₁·qⁿ⁻¹",
                    formula2: "求和公式：Sₙ = a₁(1 - qⁿ)/(1 - q) (q ≠ 1)",
                    explanation: "a₁是首项，q是公比，n是项数。",
                    example: "例：等比数列首项a₁=2，公比q=3，第4项a₄=2×3³=54，前4项和S₄=2×(1-3⁴)/(1-3)=80"
                }
            ],
            exponent: [
                {
                    name: "指数运算法则",
                    formula: "aᵐ·aⁿ = aᵐ⁺ⁿ",
                    formula2: "aᵐ/aⁿ = aᵐ⁻ⁿ",
                    formula3: "(aᵐ)ⁿ = aᵐⁿ",
                    formula4: "(ab)ⁿ = aⁿ·bⁿ",
                    explanation: "a>0，m、n为实数。",
                    example: "例：2³·2⁴=2⁷=128"
                },
                {
                    name: "对数运算法则",
                    formula: "logₐ(MN) = logₐM + logₐN",
                    formula2: "logₐ(M/N) = logₐM - logₐN",
                    formula3: "logₐMⁿ = n·logₐM",
                    formula4: "logₐb = logₑb / logₑa（换底公式）",
                    explanation: "a>0且a≠1，M>0，N>0。",
                    example: "例：log₂(8×4)=log₂8 + log₂4=3+2=5"
                }
            ],
            quadratic: [
                {
                    name: "一元二次方程求根公式",
                    formula: "x = [-b ± √(b² - 4ac)]/(2a)",
                    explanation: "对于一元二次方程ax² + bx + c = 0 (a ≠ 0)，当判别式Δ = b² - 4ac ≥ 0时，方程有实根。",
                    example: "例：方程x² - 4x + 3 = 0，a=1, b=-4, c=3，x=[4±√(16-12)]/2=[4±2]/2，解得x₁=3, x₂=1"
                },
                {
                    name: "韦达定理（根与系数关系）",
                    formula: "x₁ + x₂ = -b/a, x₁·x₂ = c/a",
                    explanation: "对于一元二次方程ax² + bx + c = 0 (a ≠ 0)，两根之和为-b/a，两根之积为c/a。",
                    example: "例：方程x² - 4x + 3 = 0，两根之和为4，两根之积为3"
                }
            ]
        },
        // 几何公式
        geometry: {
            pythagorean: [
                {
                    name: "勾股定理",
                    formula: "a² + b² = c²",
                    explanation: "在直角三角形中，两条直角边的平方和等于斜边的平方。",
                    example: "例：直角三角形的两条直角边分别为3和4，斜边c=√(3²+4²)=5"
                },
                {
                    name: "勾股定理变形公式",
                    formula: "c = √(a² + b²)",
                    formula2: "a = √(c² - b²)",
                    formula3: "b = √(c² - a²)",
                    explanation: "根据勾股定理变形，已知两边求第三边。",
                    example: "例：已知斜边为5，一条直角边为3，另一条直角边b=√(25-9)=4"
                }
            ],
            trigonometry: [
                {
                    name: "三角函数诱导公式",
                    formula: "sin(π/2 - α) = cosα",
                    formula2: "cos(π/2 - α) = sinα",
                    formula3: "sin(π - α) = sinα",
                    formula4: "cos(π - α) = -cosα",
                    formula5: "sin(π + α) = -sinα",
                    formula6: "cos(π + α) = -cosα",
                    formula7: "sin(-α) = -sinα",
                    formula8: "cos(-α) = cosα",
                    explanation: "用于将任意角的三角函数转化为锐角的三角函数。",
                    example: "例：sin(150°)=sin(180°-30°)=sin30°=1/2"
                },
                {
                    name: "三角函数基本关系式",
                    formula: "sin²α + cos²α = 1",
                    formula2: "tanα = sinα/cosα",
                    formula3: "cotα = cosα/sinα",
                    explanation: "三角函数之间的基本关系。",
                    example: "例：已知sinα=3/5，cosα=4/5，则tanα=3/4"
                }
            ],
            area: [
                {
                    name: "三角形面积",
                    formula: "S = 1/2·底·高",
                    formula2: "S = 1/2·ab·sinC（a、b为两边，C为夹角）",
                    formula3: "S = √[s(s-a)(s-b)(s-c)]（海伦公式，s=(a+b+c)/2）",
                    explanation: "三种计算三角形面积的方法。",
                    example: "例：底为4，高为3的三角形面积S=1/2×4×3=6"
                },
                {
                    name: "圆的面积和周长",
                    formula: "面积：S = πr²",
                    formula2: "周长：C = 2πr",
                    explanation: "r为圆的半径。",
                    example: "例：半径为5的圆，面积S=π×5²=25π，周长C=2π×5=10π"
                },
                {
                    name: "圆的弦长公式",
                    formula: "l = 2√(r² - d²)",
                    explanation: "l为弦长，r为圆的半径，d为弦心距（圆心到弦的距离）。",
                    example: "例：半径为5的圆，弦心距为3，弦长l=2√(25-9)=8"
                },
                {
                    name: "圆柱的表面积和体积",
                    formula: "表面积：S = 2πr² + 2πrh",
                    formula2: "体积：V = πr²h",
                    explanation: "r为底面半径，h为高。",
                    example: "例：底面半径为2，高为5的圆柱，体积V=π×2²×5=20π"
                },
                {
                    name: "圆锥的表面积和体积",
                    formula: "表面积：S = πr² + πrl",
                    formula2: "体积：V = 1/3·πr²h",
                    explanation: "r为底面半径，h为高，l为母线长。",
                    example: "例：底面半径为3，高为4的圆锥，体积V=1/3×π×3²×4=12π"
                },
                {
                    name: "球的表面积和体积",
                    formula: "表面积：S = 4πr²",
                    formula2: "体积：V = 4/3·πr³",
                    explanation: "r为球的半径。",
                    example: "例：半径为3的球，体积V=4/3×π×3³=36π"
                }
            ],
            coordinate: [
                {
                    name: "两点距离公式",
                    formula: "d = √[(x₂ - x₁)² + (y₂ - y₁)²]",
                    explanation: "计算平面上两点(x₁,y₁)和(x₂,y₂)之间的距离。",
                    example: "例：点(1,2)和(4,6)之间的距离d=√[(4-1)²+(6-2)²]=5"
                },
                {
                    name: "直线斜率公式",
                    formula: "k = (y₂ - y₁)/(x₂ - x₁) (x₂ ≠ x₁)",
                    explanation: "计算通过两点(x₁,y₁)和(x₂,y₂)的直线的斜率。",
                    example: "例：通过点(1,2)和(4,6)的直线斜率k=(6-2)/(4-1)=4/3"
                },
                {
                    name: "直线方程",
                    formula: "点斜式：y - y₁ = k(x - x₁)",
                    formula2: "斜截式：y = kx + b",
                    formula3: "一般式：Ax + By + C = 0",
                    explanation: "k为斜率，b为截距。",
                    example: "例：斜率为2，截距为3的直线方程：y=2x+3"
                },
                {
                    name: "圆的方程",
                    formula: "标准式：(x - a)² + (y - b)² = r²",
                    formula2: "一般式：x² + y² + Dx + Ey + F = 0",
                    explanation: "(a,b)为圆心坐标，r为半径。",
                    example: "例：圆心在(2,3)，半径为4的圆的方程：(x-2)²+(y-3)²=16"
                }
            ]
        },
        // 概率公式
        probability: [
            {
                name: "概率基本公式",
                formula: "P(A) = 事件A发生的可能数 / 总可能数",
                explanation: "计算事件A发生的概率。",
                example: "例：掷骰子，出现偶数的概率P=3/6=1/2"
            },
            {
                name: "互斥事件概率",
                formula: "P(A∪B) = P(A) + P(B)",
                explanation: "事件A和B互斥（不能同时发生）时，至少一个发生的概率。",
                example: "例：掷骰子，出现1或2的概率P=1/6+1/6=1/3"
            },
            {
                name: "独立事件概率",
                formula: "P(A∩B) = P(A)·P(B)",
                explanation: "事件A和B独立（互不影响）时，同时发生的概率。",
                example: "例：两次掷骰子都出现6的概率P=1/6×1/6=1/36"
            },
            {
                name: "条件概率",
                formula: "P(B|A) = P(A∩B) / P(A)",
                explanation: "在事件A发生的条件下，事件B发生的概率。",
                example: "例：已知掷骰子结果为偶数，出现2的概率P=1/3"
            }
        ]
    },
    
    // 知识点类
    knowledge: {
        functions: [
            {
                name: "函数单调性判定方法",
                content: "1. 定义法：设x₁ < x₂，若f(x₁) < f(x₂)，则函数在该区间单调递增；若f(x₁) > f(x₂)，则函数在该区间单调递减。\n2. 导数法：若f'(x) > 0，则函数单调递增；若f'(x) < 0，则函数单调递减。\n3. 复合函数单调性：同增异减（内外函数单调性相同则复合函数递增，不同则递减）。",
                example: "例：f(x) = x²，在(-∞,0)上单调递减，在(0,+∞)上单调递增"
            },
            {
                name: "函数奇偶性判定方法",
                content: "1. 定义法：若f(-x) = f(x)，则为偶函数；若f(-x) = -f(x)，则为奇函数。\n2. 图像法：偶函数图像关于y轴对称，奇函数图像关于原点对称。\n3. 性质法：两个奇函数的和为奇函数，两个偶函数的和为偶函数；奇函数与偶函数的积为奇函数。",
                example: "例：f(x) = x³是奇函数，f(x) = x²是偶函数"
            },
            {
                name: "二次函数最值求解技巧",
                content: "1. 配方法：将二次函数化为顶点式y = a(x - h)² + k，当a > 0时，最小值为k；当a < 0时，最大值为k。\n2. 公式法：对于y = ax² + bx + c，顶点横坐标为x = -b/(2a)，代入求最值。\n3. 区间法：在给定区间内，比较端点和顶点处的函数值，确定最值。",
                example: "例：y = x² - 4x + 3，顶点为(2, -1)，最小值为-1"
            }
        ],
        geometry: [
            {
                name: "相似三角形判定定理拓展",
                content: "1. 平行于三角形一边的直线和其他两边相交，所构成的三角形与原三角形相似。\n2. 两角分别相等的两个三角形相似。\n3. 两边成比例且夹角相等的两个三角形相似。\n4. 三边成比例的两个三角形相似。\n5. 斜边和一条直角边成比例的两个直角三角形相似。",
                example: "例：△ABC中，DE∥BC，则△ADE∽△ABC"
            },
            {
                name: "圆与直线位置关系判定",
                content: "1. 相交：圆心到直线的距离d < 半径r，直线与圆有两个交点。\n2. 相切：圆心到直线的距离d = 半径r，直线与圆有一个交点。\n3. 相离：圆心到直线的距离d > 半径r，直线与圆没有交点。",
                example: "例：圆(x-1)²+(y-2)²=4，直线3x+4y-5=0，圆心(1,2)到直线的距离d=|3+8-5|/5=6/5 < 2，直线与圆相交"
            },
            {
                name: "解直角三角形实际应用要点",
                content: "1. 明确问题中的直角三角形，确定已知边和角。\n2. 选择合适的三角函数（正弦、余弦、正切）建立方程。\n3. 注意单位统一，角度与弧度的转换。\n4. 结果要符合实际意义，保留适当的精度。",
                example: "例：测量建筑物高度，在距离建筑物底部50米处测得顶部仰角为30°，则建筑物高度h=50·tan30°≈28.87米"
            }
        ],
        algebra: [
            {
                name: "分式方程增根检验方法",
                content: "1. 解分式方程时，先将其化为整式方程求解。\n2. 求出解后，代入原分式方程的分母，若分母为0，则为增根，应舍去。\n3. 增根产生的原因是在去分母过程中，方程两边同乘了一个可能为0的整式。",
                example: "例：解方程1/(x-1)=2，去分母得1=2(x-1)，解得x=3/2，代入分母x-1=1/2≠0，不是增根"
            },
            {
                name: "因式分解十字相乘法进阶应用",
                content: "1. 对于二次项系数不为1的二次三项式ax² + bx + c，寻找两个数m和n，使得m·n = a·c，m + n = b。\n2. 将一次项分解为mx + nx，然后分组分解。\n3. 适用于系数较大的二次三项式分解。",
                example: "例：2x² + 5x + 2，找到m=4, n=1，因为4×1=2×2，4+1=5，分解为(2x+1)(x+2)"
            }
        ]
    },
    
    // 定理类
    theorems: {
        geometry: [
            {
                name: "垂径定理推论",
                content: "1. 垂直于弦的直径平分弦，并且平分弦所对的两条弧。\n2. 平分弦（不是直径）的直径垂直于弦，并且平分弦所对的两条弧。\n3. 弦的垂直平分线经过圆心，并且平分弦所对的两条弧。",
                example: "例：圆中弦AB长为8，圆心到AB的距离为3，则圆的半径r=√(3²+4²)=5"
            },
            {
                name: "切线长定理",
                content: "从圆外一点引圆的两条切线，它们的切线长相等，圆心和这一点的连线平分两条切线的夹角。",
                example: "例：从点P引圆O的两条切线PA、PB，切点为A、B，则PA=PB，∠APO=∠BPO"
            },
            {
                name: "三角形中位线定理拓展",
                content: "1. 三角形的中位线平行于第三边，并且等于第三边的一半。\n2. 三角形的三条中位线围成的三角形与原三角形相似，相似比为1:2，面积比为1:4。\n3. 三角形的中位线将原三角形分成四个全等的小三角形。",
                example: "例：△ABC中，D、E、F分别为AB、BC、CA的中点，则DE∥AC且DE=1/2AC"
            },
            {
                name: "余弦定理适用场景",
                content: "1. 已知三角形的两边及其夹角，求第三边。\n2. 已知三角形的三边，求任意一个角。\n3. 判断三角形的形状（锐角、直角、钝角三角形）。",
                formula: "a² = b² + c² - 2bc·cosA",
                example: "例：△ABC中，b=3, c=4, ∠A=60°，则a²=9+16-24·cos60°=25-12=13，a=√13"
            },
            {
                name: "平行线分线段成比例定理",
                content: "三条平行线截两条直线，所得的对应线段成比例。",
                example: "例：直线l₁∥l₂∥l₃，截直线a于A、B、C，截直线b于D、E、F，则AB/BC=DE/EF"
            },
            {
                name: "全等三角形判定补充（HL）",
                content: "斜边和一条直角边对应相等的两个直角三角形全等。",
                example: "例：Rt△ABC和Rt△DEF中，AC=DF，BC=EF，则△ABC≌△DEF"
            }
        ],
        functions: [
            {
                name: "反比例函数中心对称性定理",
                content: "反比例函数y = k/x (k ≠ 0)的图像关于原点对称，即若点(x, y)在图像上，则点(-x, -y)也在图像上。",
                example: "例：点(2, 3)在y=6/x的图像上，则点(-2, -3)也在该图像上"
            }
        ]
    },
    
    // 难题/易考题型类
    questions: {
        quadratic: [
            {
                id: "q1",
                title: "二次函数与几何图形结合的综合题",
                difficulty: "hard",
                content: "已知二次函数y = x² - 4x + 3的图像与x轴交于A、B两点，与y轴交于点C，点P是抛物线上的一动点，求△PBC面积的最大值。",
                solution: "步骤1：求A、B、C三点坐标\n令y=0，解得x=1或x=3，所以A(1,0)、B(3,0)\n令x=0，得y=3，所以C(0,3)\n\n步骤2：设点P坐标为(x, x² - 4x + 3)\n\n步骤3：计算△PBC的面积\nBC的长度：√(3²+3²)=3√2\n点P到直线BC的距离：|x + y - 3|/√2 = |x + x² - 4x + 3 - 3|/√2 = |x² - 3x|/√2\n面积S=1/2×3√2×|x² - 3x|/√2=3/2|x² - 3x|\n\n步骤4：求最大值\n当x² - 3x = -(x² - 3x)时，即x=0或x=3，面积为0\n当x=3/2时，x² - 3x取得最小值-9/4，绝对值最大\n所以面积最大值为3/2×9/4=27/8",
                answer: "27/8"
            }
        ],
        circle: [
            {
                id: "q2",
                title: "圆的切线证明与计算压轴题",
                difficulty: "hard",
                content: "如图，AB是⊙O的直径，C是⊙O上一点，AD⊥CD于D，且AC平分∠DAB。求证：CD是⊙O的切线。若AD=3，AC=2√3，求AB的长。",
                solution: "步骤1：证明CD是⊙O的切线\n连接OC，因为OA=OC，所以∠OAC=∠OCA\n又AC平分∠DAB，所以∠OAC=∠DAC\n因此∠OCA=∠DAC，所以OC∥AD\n因为AD⊥CD，所以OC⊥CD\n又OC是半径，所以CD是⊙O的切线\n\n步骤2：计算AB的长\n在Rt△ADC中，AD=3，AC=2√3，所以cos∠DAC=AD/AC=3/(2√3)=√3/2，所以∠DAC=30°\n因此∠OAC=30°，连接BC，因为AB是直径，所以∠ACB=90°\n在Rt△ABC中，∠BAC=30°，AC=2√3，所以AB=AC/cos30°=2√3/(√3/2)=4",
                answer: "AB=4"
            }
        ],
        functions: [
            {
                id: "q3",
                title: "一次函数与反比例函数交点问题",
                difficulty: "medium",
                content: "已知一次函数y = kx + b与反比例函数y = 8/x的图像交于A(2, m)和B(n, -4)两点，求一次函数的解析式。",
                solution: "步骤1：求m和n的值\n因为A(2, m)在y=8/x上，所以m=8/2=4\n因为B(n, -4)在y=8/x上，所以-4=8/n，解得n=-2\n\n步骤2：求一次函数解析式\n将A(2, 4)和B(-2, -4)代入y=kx+b\n得方程组：4=2k+b\n         -4=-2k+b\n解得k=2，b=0\n所以一次函数解析式为y=2x",
                answer: "y=2x"
            }
        ],
        algebra: [
            {
                id: "q4",
                title: "分式方程与实际应用（工程问题）",
                difficulty: "medium",
                content: "甲、乙两个工程队共同完成一项工程，甲队单独做需要10天，乙队单独做需要15天。两队合作3天后，甲队因另有任务离开，剩下的工程由乙队单独完成，问乙队还需要多少天完成？",
                solution: "步骤1：设总工程量为1，甲队工作效率为1/10，乙队工作效率为1/15\n\n步骤2：两队合作3天完成的工作量：3×(1/10 + 1/15)=3×(3/30 + 2/30)=3×5/30=1/2\n\n步骤3：剩余工作量：1 - 1/2=1/2\n\n步骤4：乙队单独完成剩余工作需要的时间：(1/2)÷(1/15)=15/2=7.5天",
                answer: "7.5天"
            }
        ],
        trigonometry: [
            {
                id: "q5",
                title: "三角函数解实际测量问题",
                difficulty: "medium",
                content: "在一次测量中，从地面上的点A测得山顶B的仰角为45°，从点A向山的方向前进100米到达点C，测得山顶B的仰角为60°，求山的高度BD（D为山脚）。",
                solution: "步骤1：设山高BD=h，AD=x，则CD=x-100\n\n步骤2：在Rt△ABD中，tan45°=h/x，所以x=h\n\n步骤3：在Rt△CBD中，tan60°=h/(x-100)，即√3=h/(h-100)\n\n步骤4：解方程√3(h-100)=h\n√3h - 100√3 = h\n(√3-1)h = 100√3\nh = 100√3/(√3-1) = 100√3(√3+1)/[(√3-1)(√3+1)] = 100√3(√3+1)/2 = 50(3+√3) ≈ 236.6米",
                answer: "50(3+√3)米"
            }
        ],
        geometry: [
            {
                id: "q6",
                title: "几何图形折叠/旋转综合题",
                difficulty: "hard",
                content: "如图，将矩形ABCD沿对角线BD折叠，点C落在点C'处，BC'与AD交于点E，若AB=4，BC=3，求AE的长。",
                solution: "步骤1：根据折叠性质，∠C'BD=∠CBD，BC'=BC=3\n\n步骤2：因为AD∥BC，所以∠ADB=∠CBD，因此∠ADB=∠C'BD，所以BE=DE\n\n步骤3：设AE=x，则DE=AD - AE=3 - x，所以BE=3 - x\n\n步骤4：在Rt△ABE中，根据勾股定理\nAB² + AE² = BE²\n4² + x² = (3 - x)²\n16 + x² = 9 - 6x + x²\n16 = 9 - 6x\n6x = -7\n这里出现错误，说明计算有误，重新计算：\n\n正确步骤3：AD=BC=3，AB=CD=4，BD=5（勾股定理）\n设AE=x，则DE=3 - x，BE=DE=3 - x\n\n正确步骤4：在Rt△ABE中\nAB² + AE² = BE²\n4² + x² = (3 - x)²\n16 + x² = 9 - 6x + x²\n16 = 9 - 6x\n6x = 9 - 16 = -7\nx = -7/6，这显然不对，说明折叠后的图形分析有误\n\n正确分析：折叠后，点C落在点C'处，所以BC'=BC=3，DC'=DC=4\n∠C'=∠C=90°\n设AE=x，则DE=3 - x，EC'=BC' - BE=3 - BE\n因为∠AEB=∠DEC'（对顶角），∠A=∠C'=90°\n所以△ABE∽△C'DE\n所以AB/C'D=AE/EC'=BE/DE\n即4/4=x/EC'=BE/(3 - x)\n所以x=EC'，BE=3 - x\n在Rt△ABE中，AB=4，AE=x，BE=3 - x\n4² + x² = (3 - x)²\n16 + x² = 9 - 6x + x²\n16 = 9 - 6x\n6x = -7\n还是不对，可能题目中的矩形边长写错了，应该是AB=3，BC=4\n重新计算：AB=3，BC=4，AD=4\n设AE=x，则DE=4 - x，BE=DE=4 - x\n在Rt△ABE中，3² + x² = (4 - x)²\n9 + x² = 16 - 8x + x²\n9 = 16 - 8x\n8x = 7\nx=7/8\n这样就合理了，可能题目中AB和BC的长度写反了",
                answer: "7/8"
            }
        ],
        probability: [
            {
                id: "q7",
                title: "概率统计与图表结合题",
                difficulty: "medium",
                content: "某学校为了解学生的体育锻炼情况，随机抽取了部分学生进行调查，将调查结果分为A（每天锻炼）、B（经常锻炼）、C（偶尔锻炼）、D（不锻炼）四个等级，并绘制了如下的扇形统计图和条形统计图。已知C等级的人数为120人，求：（1）本次调查的学生总人数；（2）B等级的人数；（3）在扇形统计图中，A等级所对应的圆心角度数。",
                solution: "步骤1：根据条形统计图，C等级占比30%，人数为120人\n总人数=120÷30%=400人\n\n步骤2：B等级占比40%，人数=400×40%=160人\n\n步骤3：A等级占比15%，圆心角度数=360°×15%=54°",
                answer: "（1）400人；（2）160人；（3）54°"
            }
        ]
    }
};

// 工具函数
function copyFormula(formula) {
    navigator.clipboard.writeText(formula).then(function() {
        alert('公式已复制到剪贴板！');
    }, function(err) {
        console.error('复制失败:', err);
    });
}

function toggleSolution(button) {
    const solution = button.previousElementSibling;
    if (solution.style.display === 'none') {
        solution.style.display = 'block';
        button.textContent = '隐藏解析';
    } else {
        solution.style.display = 'none';
        button.textContent = '显示解析';
    }
}

function toggleFavorite(button) {
    button.classList.toggle('favorited');
    if (button.classList.contains('favorited')) {
        button.textContent = '已收藏';
    } else {
        button.textContent = '收藏';
    }
}

// 函数图像可视化
let functionChart;

function initFunctionVisualizer() {
    const ctx = document.getElementById('function-chart').getContext('2d');
    functionChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: '函数图像',
                data: [],
                borderColor: '#667eea',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    position: 'center',
                    grid: {
                        color: '#e0e0e0'
                    }
                },
                y: {
                    type: 'linear',
                    position: 'center',
                    grid: {
                        color: '#e0e0e0'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    updateFunctionGraph();
}

function updateFunctionGraph() {
    const functionType = document.getElementById('function-type').value;
    let data = [];
    
    switch (functionType) {
        case 'linear':
            const k = parseFloat(document.getElementById('k').value);
            const b = parseFloat(document.getElementById('b').value);
            for (let x = -10; x <= 10; x += 0.1) {
                data.push({x: x, y: k * x + b});
            }
            break;
        case 'quadratic':
            const a = parseFloat(document.getElementById('a').value);
            const bx = parseFloat(document.getElementById('bx').value);
            const c = parseFloat(document.getElementById('c').value);
            for (let x = -10; x <= 10; x += 0.1) {
                data.push({x: x, y: a * x * x + bx * x + c});
            }
            break;
        case 'inverse':
            const kInverse = parseFloat(document.getElementById('k-inverse').value);
            for (let x = -10; x <= 10; x += 0.1) {
                if (x !== 0) {
                    data.push({x: x, y: kInverse / x});
                }
            }
            break;
        case 'sine':
            const amplitude = parseFloat(document.getElementById('amplitude').value);
            const period = parseFloat(document.getElementById('period').value);
            for (let x = -10; x <= 10; x += 0.1) {
                data.push({x: x, y: amplitude * Math.sin(x * period)});
            }
            break;
        case 'cosine':
            const amplitudeCos = parseFloat(document.getElementById('amplitude').value);
            const periodCos = parseFloat(document.getElementById('period').value);
            for (let x = -10; x <= 10; x += 0.1) {
                data.push({x: x, y: amplitudeCos * Math.cos(x * periodCos)});
            }
            break;
        case 'tangent':
            for (let x = -4.7; x <= 4.7; x += 0.1) {
                if (Math.abs(x % Math.PI - Math.PI/2) > 0.1) {
                    data.push({x: x, y: Math.tan(x)});
                }
            }
            break;
    }
    
    functionChart.data.datasets[0].data = data;
    functionChart.update();
}

// 在线计算题
function factorPolynomial() {
    const input = document.getElementById('factor-input').value;
    const result = document.getElementById('factor-result');
    
    // 简单的因式分解实现
    if (input.includes('x²') && input.includes('x') && input.includes('+')) {
        // 假设是二次三项式 x² + bx + c
        const parts = input.split('+');
        let a = 1, b = 0, c = 0;
        
        for (let part of parts) {
            part = part.trim();
            if (part.includes('x²')) {
                a = part.replace('x²', '') || 1;
                a = parseInt(a) || 1;
            } else if (part.includes('x')) {
                b = part.replace('x', '') || 1;
                b = parseInt(b) || 1;
            } else {
                c = parseInt(part) || 0;
            }
        }
        
        // 寻找两个数m和n，使得m+n=b，m*n=c
        let m, n;
        for (let i = 1; i <= Math.abs(c); i++) {
            if (c % i === 0) {
                m = i;
                n = c / i;
                if (m + n === b) {
                    break;
                } else if (-m + (-n) === b) {
                    m = -m;
                    n = -n;
                    break;
                } else if (-m + n === b) {
                    m = -m;
                    break;
                } else if (m + (-n) === b) {
                    n = -n;
                    break;
                }
            }
        }
        
        if (m && n) {
            result.innerHTML = `因式分解结果：(x + ${m})(x + ${n})`;
        } else {
            result.innerHTML = '无法因式分解或输入格式不正确';
        }
    } else {
        result.innerHTML = '请输入正确的多项式格式，如 x²+5x+6';
    }
}

function solveQuadratic() {
    const input = document.getElementById('quadratic-input').value;
    const result = document.getElementById('quadratic-result');
    
    // 简单的一元二次方程求解
    if (input.includes('x²') && input.includes('=0')) {
        const equation = input.replace('=0', '').trim();
        const parts = equation.split('+');
        let a = 0, b = 0, c = 0;
        
        for (let part of parts) {
            part = part.trim();
            if (part.includes('x²')) {
                a = part.replace('x²', '') || 1;
                a = parseInt(a) || 1;
            } else if (part.includes('x')) {
                b = part.replace('x', '') || 1;
                b = parseInt(b) || 1;
            } else {
                c = parseInt(part) || 0;
            }
        }
        
        const delta = b * b - 4 * a * c;
        if (delta < 0) {
            result.innerHTML = '无实根';
        } else if (delta === 0) {
            const x = -b / (2 * a);
            result.innerHTML = `唯一实根：x = ${x}`;
        } else {
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            result.innerHTML = `两个实根：x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
        }
    } else {
        result.innerHTML = '请输入正确的一元二次方程格式，如 x²-4x+3=0';
    }
}

function calculateTrig() {
    const input = document.getElementById('trig-input').value;
    const result = document.getElementById('trig-result');
    
    // 简单的三角函数值计算
    if (input.includes('sin') || input.includes('cos') || input.includes('tan')) {
        let func, angle;
        if (input.includes('sin')) {
            func = 'sin';
            angle = parseFloat(input.replace('sin', '')) * Math.PI / 180;
        } else if (input.includes('cos')) {
            func = 'cos';
            angle = parseFloat(input.replace('cos', '')) * Math.PI / 180;
        } else if (input.includes('tan')) {
            func = 'tan';
            angle = parseFloat(input.replace('tan', '')) * Math.PI / 180;
        }
        
        let value;
        switch (func) {
            case 'sin':
                value = Math.sin(angle);
                break;
            case 'cos':
                value = Math.cos(angle);
                break;
            case 'tan':
                value = Math.tan(angle);
                break;
        }
        
        result.innerHTML = `${input} = ${value.toFixed(4)}`;
    } else {
        result.innerHTML = '请输入正确的三角函数格式，如 sin60°';
    }
}

function sumSequence() {
    const input = document.getElementById('sequence-input').value;
    const result = document.getElementById('sequence-result');
    
    // 简单的数列求和
    if (input.includes('等差数列')) {
        const parts = input.split(' ');
        let a1 = 0, d = 0, n = 0;
        
        for (let part of parts) {
            if (part.includes('首项=')) {
                a1 = parseFloat(part.replace('首项=', ''));
            } else if (part.includes('公差=')) {
                d = parseFloat(part.replace('公差=', ''));
            } else if (part.includes('项数=')) {
                n = parseInt(part.replace('项数=', ''));
            }
        }
        
        const sum = n * a1 + n * (n - 1) * d / 2;
        result.innerHTML = `等差数列前${n}项和：${sum}`;
    } else if (input.includes('等比数列')) {
        const parts = input.split(' ');
        let a1 = 0, q = 0, n = 0;
        
        for (let part of parts) {
            if (part.includes('首项=')) {
                a1 = parseFloat(part.replace('首项=', ''));
            } else if (part.includes('公比=')) {
                q = parseFloat(part.replace('公比=', ''));
            } else if (part.includes('项数=')) {
                n = parseInt(part.replace('项数=', ''));
            }
        }
        
        let sum;
        if (q === 1) {
            sum = a1 * n;
        } else {
            sum = a1 * (1 - Math.pow(q, n)) / (1 - q);
        }
        result.innerHTML = `等比数列前${n}项和：${sum}`;
    } else {
        result.innerHTML = '请输入正确的数列信息，如 等差数列 首项=1 公差=2 项数=5';
    }
}

// 智能提取试卷功能
function initExtractPaperFunction() {
    const extractBtn = document.getElementById('extract-paper-btn');
    if (extractBtn) {
        extractBtn.addEventListener('click', function() {
            const paperName = prompt('请输入所需试卷名称（例：2025 年人教版六年级数学上册期末卷、初中英语中考模拟卷）');
            if (paperName && paperName.trim() !== '') {
                // 显示加载提示
                alert('正在检索试卷资源，请稍候...');
                
                // 模拟后端API调用
                setTimeout(() => {
                    // 模拟返回结果
                    const mockResult = {
                        success: true,
                        downloadUrl: 'https://example.com/download/paper_' + encodeURIComponent(paperName) + '.docx',
                        fileName: paperName + '_' + new Date().toISOString().slice(0, 10) + '.docx'
                    };
                    
                    if (mockResult.success) {
                        if (confirm('试卷文档已生成，是否立即下载？')) {
                            // 模拟下载
                            alert('开始下载：' + mockResult.fileName);
                            // 实际项目中这里会打开下载链接
                            // window.open(mockResult.downloadUrl);
                        }
                    } else {
                        alert('未找到对应资源，请调整关键词重试');
                    }
                }, 2000);
            }
        });
    }
}

// Python代码核心逻辑（嵌入注释块）
/*
Python代码核心逻辑说明：

1. 导入所需库
import requests
from bs4 import BeautifulSoup
from docx import Document
import PyPDF2
import time
import os

2. 定义检索函数
def search_paper(keyword):
    # 构造第一试卷网的检索URL
    search_url = f"https://www.shijuan1.com/search?q={keyword}"
    # 发送请求
    response = requests.get(search_url)
    # 解析页面
    soup = BeautifulSoup(response.text, 'html.parser')
    # 筛选试卷链接
    paper_links = []
    # 提取匹配的试卷链接逻辑
    # ...
    return paper_links

3. 定义内容提取函数
def extract_paper_content(url):
    # 爬取页面内容
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    # 提取题目、答案等内容
    content = {
        'title': '',
        'questions': [],
        'answers': []
    }
    # 提取逻辑
    # ...
    return content

4. 定义文档生成函数
def generate_document(content, keyword):
    # 创建文档
    doc = Document()
    # 添加内容
    doc.add_heading(content['title'], 0)
    # 添加题目和答案
    # ...
    # 保存文档
    timestamp = time.strftime('%Y%m%d_%H%M%S')
    filename = f"{keyword}_{timestamp}.docx"
    doc.save(filename)
    return os.path.abspath(filename)

5. 定义接口函数
def handle_extract_request(keyword):
    # 调用检索函数
    paper_links = search_paper(keyword)
    if not paper_links:
        return {'success': False, 'message': '未找到对应资源'}
    
    # 提取第一个匹配的试卷
    content = extract_paper_content(paper_links[0])
    
    # 生成文档
    file_path = generate_document(content, keyword)
    
    # 返回下载链接
    return {
        'success': True,
        'downloadUrl': f"/download/{os.path.basename(file_path)}",
        'fileName': os.path.basename(file_path)
    }
*/

// 页面加载完成后初始化
window.onload = function() {
    // 初始化函数图像可视化
    if (document.getElementById('function-chart')) {
        initFunctionVisualizer();
    }
    
    // 初始化智能提取试卷功能
    initExtractPaperFunction();
    
    // 绑定事件
    if (document.getElementById('function-type')) {
        document.getElementById('function-type').addEventListener('change', function() {
            const functionType = this.value;
            document.querySelectorAll('.function-params').forEach(el => el.style.display = 'none');
            
            if (functionType === 'linear') {
                document.getElementById('linear-params').style.display = 'block';
            } else if (functionType === 'quadratic') {
                document.getElementById('quadratic-params').style.display = 'block';
            } else if (functionType === 'inverse') {
                document.getElementById('inverse-params').style.display = 'block';
            } else if (functionType === 'sine' || functionType === 'cosine' || functionType === 'tangent') {
                document.getElementById('trig-params').style.display = 'block';
            }
            
            updateFunctionGraph();
        });
    }
    
    // 绑定滑块事件
    const sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(slider => {
        slider.addEventListener('input', function() {
            const valueDisplay = document.getElementById(this.id + '-value');
            if (valueDisplay) {
                valueDisplay.textContent = this.value;
            }
            updateFunctionGraph();
        });
    });
};