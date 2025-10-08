import PackageCard from "../package-card";

const packages = [
  {
    followers: 500,
    price: 8.99,
    features: [
      "High-Quality Followers",
      "Instant Delivery",
      "24/7 Support",
      "No Password Required",
    ],
  },
  {
    followers: 1000,
    price: 14.99,
    isPopular: true,
    features: [
      "High-Quality Followers",
      "Instant Delivery",
      "24/7 Support",
      "No Password Required",
      "30-Day Refill Guarantee",
    ],
  },
  {
    followers: 5000,
    price: 49.99,
    isBestValue: true,
    features: [
      "High-Quality Followers",
      "Instant Delivery",
      "24/7 Support",
      "No Password Required",
      "30-Day Refill Guarantee",
      "Priority Support",
    ],
  },
  {
    followers: 10000,
    price: 89.99,
    features: [
      "High-Quality Followers",
      "Gradual Delivery Option",
      "24/7 Support",
      "No Password Required",
      "30-Day Refill Guarantee",
      "Priority Support",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Choose Your Boost
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a variety of packages to fit your needs. All plans come with our satisfaction guarantee.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
