import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { Upload, File, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

const materials = [
  'Aluminum 6061',
  'Aluminum 7075',
  'Stainless Steel 303',
  'Stainless Steel 304',
  'Stainless Steel 316',
  'Titanium Ti-6Al-4V',
  'Inconel 718',
  'Brass C360',
  'Copper 101',
  'Delrin (Acetal)',
  'Nylon',
  'PEEK',
];

const leadTimes = [
  '1 Week',
  '2 Weeks',
  '3-4 Weeks',
  '4-6 Weeks',
  '6+ Weeks',
];

export function RFQ() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    material: '',
    quantity: '',
    leadTime: '',
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/step': ['.step', '.stp'],
      'model/iges': ['.igs', '.iges'],
      'application/pdf': ['.pdf'],
    },
    maxSize: 50 * 1024 * 1024, // 50MB
  });

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rfq" className="py-24 relative">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 rounded-lg bg-slate-900/60 border border-slate-700/50 backdrop-blur-sm"
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-500" />
            <h2 className="text-2xl font-bold font-heading text-white mb-4">
              Quote Request Submitted!
            </h2>
            <p className="text-slate-400 mb-6">
              Thank you for your inquiry. Our team will review your CAD files and
              provide a quote within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Submit Another Quote
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rfq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Request a <span className="text-cyan-400">Quote</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Upload your CAD file and receive a manufacturing quote within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Name *
                </label>
                <Input
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Company *
                </label>
                <Input
                  required
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email *
              </label>
              <Input
                required
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Material
                </label>
                <Select
                  value={formData.material}
                  onChange={(e) =>
                    setFormData({ ...formData, material: e.target.value })
                  }
                >
                  <option value="">Select material</option>
                  {materials.map((material) => (
                    <option key={material} value={material}>
                      {material}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Quantity *
                </label>
                <Input
                  required
                  type="number"
                  min="1"
                  placeholder="Quantity"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Lead Time
              </label>
              <Select
                value={formData.leadTime}
                onChange={(e) =>
                  setFormData({ ...formData, leadTime: e.target.value })
                }
              >
                <option value="">Select lead time</option>
                {leadTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Select>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Upload CAD Files
              </label>
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-slate-600 hover:border-cyan-500/50'
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="w-12 h-12 mx-auto mb-4 text-slate-400" />
                <p className="text-slate-300 mb-2">
                  {isDragActive
                    ? 'Drop files here...'
                    : 'Drag & drop CAD files here, or click to select'}
                </p>
                <p className="text-sm text-slate-500">
                  Accepted formats: .STEP, .IGS, .PDF (Max 50MB)
                </p>
              </div>

              {/* File List */}
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-slate-900/50 border border-slate-700/50"
                    >
                      <div className="flex items-center gap-3">
                        <File className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm text-slate-300">{file.name}</span>
                        <span className="text-xs text-slate-500">
                          ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="p-1 text-slate-400 hover:text-red-400 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit Quote Request
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

