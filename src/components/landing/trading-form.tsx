import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowUpDown, RefreshCw } from "lucide-react"

const cryptocurrencies = [
  { value: "bitcoin", label: "Bitcoin", symbol: "BTC", icon: "₿" },
  { value: "ethereum", label: "Ethereum", symbol: "ETH", icon: "Ξ" },
  { value: "usdt", label: "Tether", symbol: "USDT", icon: "₮" },
  { value: "bnb", label: "BNB", symbol: "BNB", icon: "🔸" },
  { value: "solana", label: "Solana", symbol: "SOL", icon: "◎" },
  { value: "usdc", label: "USD Coin", symbol: "USDC", icon: "🔵" },
  { value: "cardano", label: "Cardano", symbol: "ADA", icon: "🔺" },
  { value: "dogecoin", label: "Dogecoin", symbol: "DOGE", icon: "🐕" },
  { value: "polygon", label: "Polygon", symbol: "MATIC", icon: "🟣" },
  { value: "litecoin", label: "Litecoin", symbol: "LTC", icon: "Ł" },
]

export function TradingForm() {
  const [sendCrypto, setSendCrypto] = useState("bitcoin")
  const [receiveCrypto, setReceiveCrypto] = useState("ethereum")
  const [sendAmount, setSendAmount] = useState("")
  const [receiveAmount, setReceiveAmount] = useState("")

  const handleSwap = () => {
    setSendCrypto(receiveCrypto)
    setReceiveCrypto(sendCrypto)
    setSendAmount(receiveAmount)
    setReceiveAmount(sendAmount)
  }

  const getSendCrypto = () => cryptocurrencies.find(c => c.value === sendCrypto)
  const getReceiveCrypto = () => cryptocurrencies.find(c => c.value === receiveCrypto)

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Instant Swap</CardTitle>
        <CardDescription>
          Trade cryptocurrencies instantly with no registration required
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Send Section */}
        <div className="space-y-2">
          <label className="text-sm font-medium">You Send</label>
          <div className="space-y-2">
            <Select value={sendCrypto} onValueChange={setSendCrypto}>
              <SelectTrigger>
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getSendCrypto()?.icon}</span>
                    <span>{getSendCrypto()?.symbol}</span>
                    <span className="text-muted-foreground text-sm">
                      {getSendCrypto()?.label}
                    </span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {cryptocurrencies.map((crypto) => (
                  <SelectItem key={crypto.value} value={crypto.value}>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{crypto.icon}</span>
                      <span>{crypto.symbol}</span>
                      <span className="text-muted-foreground text-sm">
                        {crypto.label}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              placeholder="0.00"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value)}
              className="text-right text-lg"
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={handleSwap}
            className="rounded-full border-2"
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Receive Section */}
        <div className="space-y-2">
          <label className="text-sm font-medium">You Receive</label>
          <div className="space-y-2">
            <Select value={receiveCrypto} onValueChange={setReceiveCrypto}>
              <SelectTrigger>
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getReceiveCrypto()?.icon}</span>
                    <span>{getReceiveCrypto()?.symbol}</span>
                    <span className="text-muted-foreground text-sm">
                      {getReceiveCrypto()?.label}
                    </span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {cryptocurrencies.map((crypto) => (
                  <SelectItem key={crypto.value} value={crypto.value}>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{crypto.icon}</span>
                      <span>{crypto.symbol}</span>
                      <span className="text-muted-foreground text-sm">
                        {crypto.label}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              placeholder="0.00"
              value={receiveAmount}
              onChange={(e) => setReceiveAmount(e.target.value)}
              className="text-right text-lg bg-muted"
              readOnly
            />
          </div>
        </div>

        {/* Exchange Rate Info */}
        <div className="bg-secondary/50 rounded-lg p-3 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Exchange Rate</span>
            <span className="flex items-center gap-1">
              1 {getSendCrypto()?.symbol} = 0.067 {getReceiveCrypto()?.symbol}
              <RefreshCw className="h-3 w-3" />
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Network Fee</span>
            <span className="text-green-600">FREE</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Trading Fee</span>
            <span>0.1%</span>
          </div>
        </div>

        {/* Action Button */}
        <Button className="w-full" size="lg">
          Start Swap
        </Button>

        {/* Additional Info */}
        <div className="text-center text-xs text-muted-foreground">
          🛡️ No registration required • 🚀 Instant execution • 🔒 Fully encrypted
        </div>
      </CardContent>
    </Card>
  )
}