import { useEffect, useRef } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { testimonials } from '../../data/Testimonials'

const TestimonialSection = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            const slider = new KeenSlider(sliderRef.current, {
                loop: true,
                slidesPerView: 1,
                spacing: 16,
                breakpoints: {
                    '(min-width: 640px)': {
                        slidesPerView: 3,
                        spacing: 32,
                    },
                },
            });

            const handlePrev = () => slider.prev();
            const handleNext = () => slider.next();

            document.getElementById('keen-slider-previous').addEventListener('click', handlePrev);
            document.getElementById('keen-slider-next').addEventListener('click', handleNext);

            return () => {
                slider.destroy();
                document.getElementById('keen-slider-previous').removeEventListener('click', handlePrev);
                document.getElementById('keen-slider-next').removeEventListener('click', handleNext);
            };
        }
    }, []);
    const groupTestimonials = (arr, size) => {
        return arr.reduce((acc, val, i) => {
            let idx = Math.floor(i / size);
            let group = acc[idx] || [];
            group.push(val);
            acc[idx] = group;
            return acc;
        }, []);
    };

    const groupedTestimonials = groupTestimonials(testimonials, 3);

    return (
        <div className="bg-white py-10 sm:py-15 relative z-10">
            <div className="mx-auto max-w-7xl px-6 items-center justify-center lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-bold leading-7 text-primary-secondary-800">TESTIMONIAL</h2>
                    <p className="mt-5 text-3xl font-bold tracking-tight text-primary-400 sm:text-4xl">
                        INI KATA PELANGGAN KAMI
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Simak pengalaman langsung dari pelanggan yang sukses dengan layanan kami. Mereka menceritakan bagaimana kami membantu mereka mencapai tujuan karir mereka di luar negeri.
                    </p>
                </div>
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div ref={sliderRef} className="keen-slider">
                        {groupedTestimonials.map((group, index) => (
                            <div key={index} className="keen-slider__slide grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                                {group.map((testimonial) => (
                                    <blockquote key={testimonial.id} className="testimonial-item rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                                        <div className="flex items-center gap-4">
                                            <img
                                                alt="Foto Para Testimoni"
                                                src={testimonial.photo}
                                                className="w-14 h-14 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="mt-0.5 text-lg font-medium text-semibold text-primary-secondary-800 text-left">{testimonial.name}</p>
                                                <p className="text-sm text-gray-500 text-left">{testimonial.jobs}</p>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-gray-700">
                                            {testimonial.testimonial}
                                        </p>
                                    </blockquote>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <button aria-label="Previous slide" id="keen-slider-previous" className="mr-4 rounded-full border border-primary-secondary-800 p-4 text-primary-secondary-800 transition hover:bg-primary-secondary-800 hover:text-white">
                            &lt;
                        </button>
                        <button aria-label="Next slide" id="keen-slider-next" className="rounded-full border border-primary-secondary-800 p-4 text-primary-secondary-800 transition hover:bg-primary-secondary-800 hover:text-white">
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
