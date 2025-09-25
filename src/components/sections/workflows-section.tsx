import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Brain } from 'lucide-react';

const Features = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="relative">
          {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-5xl heading-strong text-black mb-6">
              AI-Powered Sales Automation
          </h2>
            <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              Transform your sales process with AI-powered automation that discovers leads, personalizes outreach, and drives measurable results.
            </p>
        </div>

          {/* Features Grid */}
          <div className="relative z-10 grid grid-cols-6 gap-3">
            <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
              <CardContent className="relative m-auto size-fit pt-6">
                <div className="relative flex h-24 w-56 items-center">
                  <svg className="text-muted absolute inset-0 size-full" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="mx-auto block w-fit text-5xl font-semibold">100%</span>
                </div>
                <h2 className="mt-6 text-center text-3xl font-semibold">Fully Customizable</h2>
                <p className="text-center text-sm text-muted-foreground mt-2">Tailor workflows to your unique business needs and sales processes</p>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <Shield className="m-auto size-8" strokeWidth={1} />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">Enterprise Security</h2>
                  <p className="text-foreground">Bank-grade encryption and compliance ensure your sales data remains protected while maintaining full functionality.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                  <Brain className="m-auto size-8" strokeWidth={1} />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">AI Intelligence</h2>
                  <p className="text-foreground">Advanced machine learning algorithms analyze patterns and predict optimal engagement strategies for maximum conversion.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <Shield className="m-auto size-5" strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="group-hover:text-secondary-950 text-lg font-medium text-zinc-800 transition dark:text-white">Lightning Fast</h2>
                    <p className="text-foreground">Process thousands of leads and generate personalized outreach sequences in seconds, not hours.</p>
                  </div>
                </div>
                <div className="rounded-tl-(--radius) relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6">
                  <div className="absolute left-3 top-2 flex gap-1">
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                  </div>
                  <div className="text-center mt-8">
                    <Link
                      href="/demo"
                      className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                    >
                      Explore Workflows
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <Users className="m-auto size-6" strokeWidth={1} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-medium transition">Team Collaboration</h2>
                    <p className="text-foreground">Seamlessly collaborate across your sales team with shared workflows, insights, and performance analytics.</p>
                  </div>
                    </div>
                <div className="before:bg-(--color-border) relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                  <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                    <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                      <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">Sam</span>
                      <div className="ring-background size-7 ring-4">
                        <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/102558960?v=4" alt="" />
                      </div>
                    </div>
                    <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                      <div className="ring-background size-8 ring-4">
                        <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/31113941?v=4" alt="" />
                      </div>
                      <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">Martin</span>
                    </div>
                    <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                      <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">kylian</span>
                      <div className="ring-background size-7 ring-4">
                        <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;