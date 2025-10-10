export type Package = {
    followers: number;
    likes?: number;
    price: number;
    originalPrice?: number;
    isPopular?: boolean;
    isBestValue?: boolean;
    isDiscount?: boolean;
    features: string[];
    checkoutLink: string;
};
  
export const followerPackagesData: Omit<Package, 'originalPrice' | 'isDiscount'>[] = [
    { followers: 2250, price: 9.90, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], checkoutLink: "https://checkout.instabostt.store/VCCL1O8SCCNA" },
    { followers: 5000, price: 19.90, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], checkoutLink: "https://checkout.instabostt.store/VCCL1O8SCCNI" },
    { followers: 11250, price: 34.90, isPopular: true, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], checkoutLink: "https://checkout.instabostt.store/VCCL1O8SCCNJ" },
    { followers: 22500, price: 59.90, isBestValue: true, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], checkoutLink: "https://checkout.instabostt.store/VCCL1O8SCCNL" },
    { followers: 45000, price: 99.90, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], checkoutLink: "https://checkout.instabostt.store/VCCL1O8SCCNM" },
    { followers: 67500, price: 129.90, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], checkoutLink: "https://checkout.instabostt.store/VCCL1O8SCCNN" },
    { followers: 112500, price: 199.90, features: ["Seguidores 100% Brasileiros", "Não afeta o desempenho", "Garantia anti-queda"], checkoutLink: "https://checkout.instabostt.store/VCCL1O8SCCNM" },
];
  