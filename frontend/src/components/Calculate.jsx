import React from "react"
import { useState, useEffect, useRef } from "react"
import { TrendingUp, ChevronRight, Info } from "lucide-react"

const Calculate = () => {
    const [showSection, setShowSection] = useState("investment")
    const [investmentAmount, setInvestmentAmount] = useState(10000)
    const [sliderValue, setSliderValue] = useState(10000)
    const [investmentDuration, setInvestmentDuration] = useState(4)
    const [durationSliderValue, setDurationSliderValue] = useState(4)
    const [activeDetailTab, setActiveDetailTab] = useState("summary")
    const canvasRef = useRef(null)
    const investmentGraphRef = useRef(null)
    const chartTabRef = useRef(null)

    // Animation Effect for main chart
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const updateCanvasSize = () => {
            canvas.width = canvas.parentElement?.clientWidth || 300
            canvas.height = canvas.parentElement?.clientHeight || 200
        }

        updateCanvasSize()
        window.addEventListener("resize", updateCanvasSize)

        const investmentColor = "#3b82f6"
        const profitColor = "#34d399"
        const chartData = [
            { investment: 20, profit: 2 },
            { investment: 35, profit: 5 },
            { investment: 50, profit: 7 },
            { investment: 65, profit: 10 },
            { investment: 80, profit: 15 },
            { investment: 95, profit: 20 },
            { investment: 110, profit: 30 },
            { investment: 130, profit: 40 },
            { investment: 150, profit: 50 },
            { investment: 175, profit: 65 },
            { investment: 200, profit: 80 },
            { investment: 230, profit: 100 },
        ]

        let currentPoint = 0
        let animationProgress = 0

        const animate = () => {
            updateCanvasSize()
            const canvasWidth = canvas.width
            const canvasHeight = canvas.height
            const padding = 30

            ctx.clearRect(0, 0, canvasWidth, canvasHeight)
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
            ctx.fillRect(0, 0, canvasWidth, canvasHeight)

            // Draw grid lines
            ctx.strokeStyle = "rgba(10, 61, 63, 0.1)"
            ctx.lineWidth = 1

            for (let i = 0; i < 5; i++) {
                const y = padding + (canvasHeight - 2 * padding) * (i / 4)
                ctx.beginPath()
                ctx.moveTo(padding, y)
                ctx.lineTo(canvasWidth - padding, y)
                ctx.stroke()
            }

            for (let i = 0; i < chartData.length; i++) {
                const x = padding + (canvasWidth - 2 * padding) * (i / (chartData.length - 1))
                ctx.beginPath()
                ctx.moveTo(x, padding)
                ctx.lineTo(x, canvasHeight - padding)
                ctx.stroke()
            }

            // Draw investment line
            ctx.strokeStyle = investmentColor
            ctx.lineWidth = 3
            ctx.beginPath()

            const pointsToDraw = Math.min(chartData.length, currentPoint + 1)

            for (let i = 0; i < pointsToDraw; i++) {
                const x = padding + (canvasWidth - 2 * padding) * (i / (chartData.length - 1))
                const y = canvasHeight - padding - (chartData[i].investment / 250) * (canvasHeight - 2 * padding)

                if (i === 0) {
                    ctx.moveTo(x, y)
                } else {
                    ctx.lineTo(x, y)
                }

                ctx.fillStyle = investmentColor
                ctx.beginPath()
                ctx.arc(x, y, 4, 0, Math.PI * 2)
                ctx.fill()
            }

            ctx.stroke()

            // Draw profit line
            ctx.strokeStyle = profitColor
            ctx.lineWidth = 3
            ctx.beginPath()

            for (let i = 0; i < pointsToDraw; i++) {
                const x = padding + (canvasWidth - 2 * padding) * (i / (chartData.length - 1))
                const y = canvasHeight - padding - (chartData[i].profit / 100) * (canvasHeight - 2 * padding)

                if (i === 0) {
                    ctx.moveTo(x, y)
                } else {
                    ctx.lineTo(x, y)
                }

                ctx.fillStyle = profitColor
                ctx.beginPath()
                ctx.arc(x, y, 4, 0, Math.PI * 2)
                ctx.fill()
            }

            ctx.stroke()

            // Draw labels
            if (currentPoint < chartData.length) {
                const x = padding + (canvasWidth - 2 * padding) * (currentPoint / (chartData.length - 1))
                const investmentY =
                    canvasHeight - padding - (chartData[currentPoint].investment / 250) * (canvasHeight - 2 * padding)
                const profitY = canvasHeight - padding - (chartData[currentPoint].profit / 100) * (canvasHeight - 2 * padding)

                ctx.fillStyle = investmentColor
                ctx.font = "bold 12px Arial"
                ctx.textAlign = "center"
                ctx.fillText(`$${chartData[currentPoint].investment}k`, x, investmentY - 15)

                ctx.fillStyle = profitColor
                ctx.fillText(`${chartData[currentPoint].profit}%`, x, profitY - 15)
            }

            animationProgress += 0.02
            if (animationProgress >= 1) {
                animationProgress = 0
                currentPoint = (currentPoint + 1) % chartData.length
            }

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", updateCanvasSize)
        }
    }, [])

    // Investment Graph
    useEffect(() => {
        const canvas = investmentGraphRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const updateCanvasSize = () => {
            canvas.width = canvas.parentElement?.clientWidth || 300
            canvas.height = canvas.parentElement?.clientHeight || 200
        }

        updateCanvasSize()
        window.addEventListener("resize", updateCanvasSize)

        const drawInvestmentGraph = () => {
            updateCanvasSize()
            const canvasWidth = canvas.width
            const canvasHeight = canvas.height
            const padding = 20

            ctx.clearRect(0, 0, canvasWidth, canvasHeight)
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
            ctx.fillRect(0, 0, canvasWidth, canvasHeight)

            // Calculate returns for graph
            const results = calculateReturns(investmentAmount, investmentDuration)
            const quarterlyData = [
                { quarter: 0, amount: investmentAmount },
                ...results.quarterlyResults.map((q) => ({ quarter: q.quarter, amount: q.balance })),
            ]

            // Draw grid lines
            ctx.strokeStyle = "rgba(10, 61, 63, 0.1)"
            ctx.lineWidth = 1

            // Horizontal grid lines
            for (let i = 0; i < 5; i++) {
                const y = padding + (canvasHeight - 2 * padding) * (i / 4)
                ctx.beginPath()
                ctx.moveTo(padding, y)
                ctx.lineTo(canvasWidth - padding, y)
                ctx.stroke()
            }

            // Vertical grid lines
            for (let i = 0; i < quarterlyData.length; i++) {
                const x = padding + (canvasWidth - 2 * padding) * (i / (quarterlyData.length - 1))
                ctx.beginPath()
                ctx.moveTo(x, padding)
                ctx.lineTo(x, canvasHeight - padding)
                ctx.stroke()
            }

            // Find max value for scaling
            const maxAmount = Math.max(...quarterlyData.map((d) => d.amount))

            // Draw investment line
            ctx.strokeStyle = "#004d40"
            ctx.lineWidth = 3
            ctx.beginPath()

            for (let i = 0; i < quarterlyData.length; i++) {
                const x = padding + (canvasWidth - 2 * padding) * (i / (quarterlyData.length - 1))
                const y = canvasHeight - padding - (quarterlyData[i].amount / maxAmount) * (canvasHeight - 2 * padding)

                if (i === 0) {
                    ctx.moveTo(x, y)
                } else {
                    ctx.lineTo(x, y)
                }

                // Draw points
                ctx.fillStyle = "#004d40"
                ctx.beginPath()
                ctx.arc(x, y, 4, 0, Math.PI * 2)
                ctx.fill()

                // Draw amount labels
                ctx.fillStyle = "#004d40"
                ctx.font = "bold 10px Arial"
                ctx.textAlign = "center"
                if (i === 0 || i === quarterlyData.length - 1 || i % Math.ceil(quarterlyData.length / 4) === 0) {
                    ctx.fillText(`₹${Math.round(quarterlyData[i].amount).toLocaleString()}`, x, y - 10)
                }
            }

            ctx.stroke()

            // Fill area under the line
            ctx.lineTo(padding + (canvasWidth - 2 * padding), canvasHeight - padding)
            ctx.lineTo(padding, canvasHeight - padding)
            ctx.closePath()
            ctx.fillStyle = "rgba(0, 77, 64, 0.1)"
            ctx.fill()

            // Draw x-axis labels
            ctx.fillStyle = "#666"
            ctx.font = "10px Arial"
            ctx.textAlign = "center"

            for (let i = 0; i < quarterlyData.length; i++) {
                const x = padding + (canvasWidth - 2 * padding) * (i / (quarterlyData.length - 1))
                if (i === 0 || i === quarterlyData.length - 1 || i % Math.ceil(quarterlyData.length / 4) === 0) {
                    ctx.fillText(i === 0 ? "Start" : `Q${quarterlyData[i].quarter}`, x, canvasHeight - 5)
                }
            }
        }

        drawInvestmentGraph()

        // Redraw when investment amount or duration changes
        const handleResize = () => {
            drawInvestmentGraph()
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [investmentAmount, investmentDuration])

    // Chart Tab Graph
    useEffect(() => {
        if (activeDetailTab !== "chart") return

        const canvas = chartTabRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const updateCanvasSize = () => {
            canvas.width = canvas.parentElement?.clientWidth || 300
            canvas.height = canvas.parentElement?.clientHeight || 200
        }

        updateCanvasSize()

        const results = calculateReturns(investmentAmount, investmentDuration)

        // Draw chart
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        const barWidth = canvas.width / (results.quarterlyResults.length * 2)
        const maxInterest = Math.max(...results.quarterlyResults.map((q) => q.interest))
        const barSpacing = barWidth / 2

        // Draw grid lines
        ctx.strokeStyle = "rgba(10, 61, 63, 0.1)"
        ctx.lineWidth = 1

        for (let i = 0; i < 5; i++) {
            const y = canvas.height - canvas.height * (i / 4)
            ctx.beginPath()
            ctx.moveTo(0, y)
            ctx.lineTo(canvas.width, y)
            ctx.stroke()
        }

        // Draw bars
        results.quarterlyResults.forEach((quarter, index) => {
            const x = index * (barWidth * 2) + barSpacing
            const barHeight = (quarter.interest / maxInterest) * (canvas.height - 40)

            // Draw bar
            ctx.fillStyle = "#004d40"
            ctx.beginPath()
            ctx.rect(x, canvas.height - barHeight - 20, barWidth, barHeight)
            ctx.fill()

            // Draw quarter label
            ctx.fillStyle = "#666"
            ctx.font = "10px Arial"
            ctx.textAlign = "center"
            ctx.fillText(`Q${quarter.quarter}`, x + barWidth / 2, canvas.height - 5)

            // Draw amount on top of bar
            ctx.fillStyle = "#004d40"
            ctx.font = "bold 10px Arial"
            ctx.textAlign = "center"
            ctx.fillText(`₹${quarter.interest.toLocaleString()}`, x + barWidth / 2, canvas.height - barHeight - 25)
        })

        // Draw title
        ctx.fillStyle = "#333"
        ctx.font = "12px Arial"
        ctx.textAlign = "center"
        ctx.fillText("Quarterly Profit Growth", canvas.width / 2, 15)
    }, [activeDetailTab, investmentAmount, investmentDuration])

    // Calculate returns based on 6% quarterly compounding
    const calculateReturns = (amount, quarters = 4) => {
        const quarterlyRate = 0.06
        let currentAmount = amount
        const quarterlyResults = []

        for (let i = 1; i <= quarters; i++) {
            const quarterlyInterest = currentAmount * quarterlyRate
            currentAmount += quarterlyInterest
            quarterlyResults.push({
                quarter: i,
                interest: Math.round(quarterlyInterest),
                balance: Math.round(currentAmount),
            })
        }

        const finalAmount = currentAmount
        const profit = finalAmount - amount
        const returnPercentage = (profit / amount) * 100

        // Tree family distribution
        const mukhyaShare = profit * 0.7
        const familyShare = profit * 0.3
        const perMember = profit * 0.06

        return {
            initialAmount: amount,
            finalAmount: Math.round(finalAmount),
            profit: Math.round(profit),
            returnPercentage: returnPercentage.toFixed(2),
            quarterlyResults,
            mukhyaShare: Math.round(mukhyaShare),
            familyShare: Math.round(familyShare),
            perMember: Math.round(perMember),
        }
    }

    const results = calculateReturns(investmentAmount, investmentDuration)

    const handleAmountSliderChange = (e) => {
        const value = Number.parseInt(e.target.value)
        setInvestmentAmount(value)
        setSliderValue(value)
    }

    const handleDurationSliderChange = (e) => {
        const value = Number.parseInt(e.target.value)
        setInvestmentDuration(value)
        setDurationSliderValue(value)
    }

    const handleAmountButtonClick = (amount) => {
        setInvestmentAmount(amount)
        setSliderValue(amount)
    }

    const handleDurationButtonClick = (quarters) => {
        setInvestmentDuration(quarters)
        setDurationSliderValue(quarters)
    }

    return (
        <div className="w-full">
            {/* Calculator Section */}
            <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 pattern-grid">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                        {/* Left Column */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-bold text-[#004d40] mb-3">Calculate Your Returns</h1>
                                <p className="text-gray-600 text-base sm:text-lg">
                                    Use our investment calculator to see how your money can grow with Infinium Finance quarterly
                                    compounding model.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 flex items-center justify-center text-teal-900">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chart-column"
                                        >
                                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                            <path d="M18 17V9"></path>
                                            <path d="M13 17V5"></path>
                                            <path d="M8 17v-3"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 text-base sm:text-lg">See your potential returns over time</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 flex items-center justify-center text-teal-900">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chart-column"
                                        >
                                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                            <path d="M18 17V9"></path>
                                            <path d="M13 17V5"></path>
                                            <path d="M8 17v-3"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 text-base sm:text-lg">Visualize the power of compounding</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 flex items-center justify-center text-teal-900">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-chart-column"
                                        >
                                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                            <path d="M18 17V9"></path>
                                            <path d="M13 17V5"></path>
                                            <path d="M8 17v-3"></path>
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 text-base sm:text-lg">Plan your financial future with confidence</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 h-[300px]">
                                <canvas ref={canvasRef} className="w-full h-full" />
                            </div>

                            {/* Investment Growth Graph */}
                            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                                <h3 className="text-lg font-medium text-[#004d40] mb-4">Your Investment Growth</h3>
                                <div className="h-[200px]">
                                    <canvas ref={investmentGraphRef} className="w-full h-full" />
                                </div>
                                <div className="mt-3 text-sm text-gray-500 text-center">
                                    Investment growth over {investmentDuration / 4} {investmentDuration / 4 === 1 ? "year" : "years"} (
                                    {investmentDuration} quarters)
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-full lg:w-1/2">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                {/* Tabs */}
                                <div className="grid grid-cols-2 border-b">
                                    <button
                                        className={`py-3 sm:py-4 text-center font-medium transition-colors ${showSection === "investment" ? "bg-white text-[#004d40]" : "bg-gray-50 text-gray-500"
                                            }`}
                                        onClick={() => setShowSection("investment")}
                                    >
                                        Investment Amount
                                    </button>
                                    <button
                                        className={`py-3 sm:py-4 text-center font-medium transition-colors ${showSection === "duration" ? "bg-white text-[#004d40]" : "bg-gray-50 text-gray-500"
                                            }`}
                                        onClick={() => setShowSection("duration")}
                                    >
                                        Duration
                                    </button>
                                </div>

                                <div className="p-4 sm:p-6">
                                    {showSection === "investment" && (
                                        <div className="mb-6">
                                            <label className="block text-md font-medium text-gray-700 mb-2">Initial Investment Amount</label>
                                            <input
                                                type="number"
                                                value={investmentAmount}
                                                onChange={(e) => setInvestmentAmount(Number.parseInt(e.target.value) || 0)}
                                                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                                            />

                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                                                {[10000, 50000, 100000, 1000000].map((amount) => (
                                                    <button
                                                        key={amount}
                                                        className={`py-2 px-3 text-sm rounded-lg transition-colors ${investmentAmount === amount
                                                            ? "bg-[#d4af37] text-white"
                                                            : "border border-gray-300 text-gray-700 hover:border-[#d4af37]"
                                                            }`}
                                                        onClick={() => handleAmountButtonClick(amount)}
                                                    >
                                                        ₹{amount.toLocaleString()}
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="range"
                                                    min="10000"
                                                    max="1000000"
                                                    step="1000"
                                                    value={sliderValue}
                                                    onChange={handleAmountSliderChange}
                                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#004d40]"
                                                />
                                                <div className="flex justify-between text-sm text-gray-500 mt-2">
                                                    <span>₹10,000</span>
                                                    <span>₹10,00,000</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {showSection === "duration" && (
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Investment Duration</label>
                                            <div className="text-center font-medium mb-4">
                                                {investmentDuration === 4 && "1 Year (4 Quarters)"}
                                                {investmentDuration === 8 && "2 Years (8 Quarters)"}
                                                {investmentDuration === 12 && "3 Years (12 Quarters)"}
                                                {investmentDuration === 20 && "5 Years (20 Quarters)"}
                                            </div>

                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                                                {[4, 8, 12, 20].map((quarters) => (
                                                    <button
                                                        key={quarters}
                                                        className={`py-2 px-3 text-sm rounded-lg transition-colors ${investmentDuration === quarters
                                                            ? "bg-[#d4af37] text-white"
                                                            : "border border-gray-300 text-gray-700 hover:border-[#d4af37]"
                                                            }`}
                                                        onClick={() => handleDurationButtonClick(quarters)}
                                                    >
                                                        {quarters === 4 && "1 Year"}
                                                        {quarters === 8 && "2 Years"}
                                                        {quarters === 12 && "3 Years"}
                                                        {quarters === 20 && "5 Years"}
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="relative">
                                                <input
                                                    type="range"
                                                    min="4"
                                                    max="20"
                                                    step="4"
                                                    value={durationSliderValue}
                                                    onChange={handleDurationSliderChange}
                                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#004d40]"
                                                />
                                                <div className="flex justify-between text-sm text-gray-500 mt-2">
                                                    <span>1 Year</span>
                                                    <span>5 Years</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Results Section */}
                                    <div className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg space-y-4 shadow-sm border border-gray-100">
                                        <div className="flex items-center mb-4">
                                            <div className="mr-3 p-2 rounded-lg">
                                                <TrendingUp size={24} className="text-yellow-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#004d40]">Your Investment Growth</h3>
                                        </div>

                                        <div className="flex space-x-4 mb-4 border-b border-gray-200">
                                            <button
                                                className={`pb-2 text-sm font-medium hover:text-[#d4af37] transition-colors ${activeDetailTab === "summary"
                                                    ? "text-[#004d40] border-b-2 border-[#004d40] hover:border-[#d4af37]"
                                                    : "text-gray-500"
                                                    }`}
                                                onClick={() => setActiveDetailTab("summary")}
                                            >
                                                Summary
                                            </button>
                                            <button
                                                className={`pb-2 text-sm font-medium hover:text-[#d4af37] transition-colors ${activeDetailTab === "details"
                                                    ? "text-[#004d40] border-b-2 border-[#004d40] hover:border-[#d4af37]"
                                                    : "text-gray-500"
                                                    }`}
                                                onClick={() => setActiveDetailTab("details")}
                                            >
                                                Details
                                            </button>
                                            <button
                                                className={`pb-2 text-sm font-medium hover:text-[#d4af37] transition-colors ${activeDetailTab === "chart"
                                                    ? "text-[#004d40] border-b-2 border-[#004d40] hover:border-[#d4af37]"
                                                    : "text-gray-500"
                                                    }`}
                                                onClick={() => setActiveDetailTab("chart")}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>

                                        {activeDetailTab === "summary" && (
                                            <>
                                                <div className="grid grid-cols-2 gap-4 mb-6">
                                                    <div>
                                                        <div className="text-md text-gray-500">Initial Investment</div>
                                                        <div className="text-lg font-bold text-[#004d40]">
                                                            ₹{results.initialAmount.toLocaleString()}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-md text-gray-500">Final Amount</div>
                                                        <div className="text-lg font-bold text-[#004d40]">
                                                            ₹{results.finalAmount.toLocaleString()}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-md text-gray-500">Total Profit</div>
                                                        <div className="text-lg font-bold text-green-600">₹{results.profit.toLocaleString()}</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-md text-gray-500">Return Percentage</div>
                                                        <div className="text-lg font-bold text-green-600">{results.returnPercentage}%</div>
                                                    </div>
                                                </div>

                                                <div className="mb-6">
                                                    <div className="flex items-center mb-2">
                                                        <h4 className="text-md font-medium">Tree Family Distribution:</h4>
                                                        <div className="ml-1 text-gray-500 text-sm">
                                                            <Info size={14} />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-3 gap-2">
                                                        <div>
                                                            <div className="text-sm font-semibold text-gray-500">Mukhya Share (70%)</div>
                                                            <div className="text-sm font-semibold text-[#d4af37]">
                                                                ₹{results.mukhyaShare.toLocaleString()}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-semibold text-gray-500">Family Share (30%)</div>
                                                            <div className="text-sm font-semibold text-[#d4af37]">
                                                                ₹{results.familyShare.toLocaleString()}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-semibold text-gray-500">Per Member (5)</div>
                                                            <div className="text-sm font-semibold text-[#d4af37]">
                                                                ₹{results.perMember.toLocaleString()}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {activeDetailTab === "details" && (
                                            <div className="mb-6 overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                        <tr className="border-b border-gray-200">
                                                            <th className="text-left py-2 font-medium text-gray-600">Quarter</th>
                                                            <th className="text-right py-2 font-medium text-gray-600">Profit</th>
                                                            <th className="text-right py-2 font-medium text-gray-600">Balance</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {results.quarterlyResults.map((quarter) => (
                                                            <tr key={quarter.quarter} className="border-b border-gray-100">
                                                                <td className="py-2">Quarter {quarter.quarter}</td>
                                                                <td className="text-right py-2">₹{quarter.interest.toLocaleString()}</td>
                                                                <td className="text-right py-2">₹{quarter.balance.toLocaleString()}</td>
                                                            </tr>
                                                        ))}
                                                        <tr className="font-medium">
                                                            <td className="py-2">Total</td>
                                                            <td className="text-right py-2 text-green-600">₹{results.profit.toLocaleString()}</td>
                                                            <td className="text-right py-2">₹{results.finalAmount.toLocaleString()}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}

                                        {activeDetailTab === "chart" && (
                                            <div className="mb-6">
                                                <div className="h-[200px] w-full">
                                                    <canvas ref={chartTabRef} className="w-full h-full" />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <button className="w-full bg-[#d4af37] text-white font-semibold py-3 px-4 rounded mt-6 flex items-center justify-center hover:bg-[#c4a030] transform transition-all duration-300 hover:scale-[1.02]">
                                        Start Investing Now
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </button>

                                    <p className="text-center text-md text-gray-500 mt-3">
                                        Secure, transparent, and profitable investment solutions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculate
