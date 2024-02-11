export const defaultGraph = {
    last_node_id: 273,
    last_link_id: 423,
    nodes: [{
        id: 55,
        type: "Reroute",
        pos: [2350, 1250],
        size: [75, 26],
        flags: {},
        order: 32,
        mode: 0,
        inputs: [{
            name: "",
            type: "*",
            link: 88,
            pos: [37.5, 0]
        }],
        outputs: [{
            name: "",
            type: "IMAGE",
            links: [89],
            slot_index: 0
        }],
        properties: {
            showOutputText: false,
            horizontal: true
        },
        color: "#322",
        bgcolor: "#533"
    }, {
        id: 56,
        type: "Reroute",
        pos: [2410, 1300],
        size: [75, 26],
        flags: {},
        order: 33,
        mode: 0,
        inputs: [{
            name: "",
            type: "*",
            link: 89
        }],
        outputs: [{
            name: "",
            type: "IMAGE",
            links: [93],
            slot_index: 0
        }],
        properties: {
            showOutputText: false,
            horizontal: false
        },
        color: "#322",
        bgcolor: "#533"
    }, {
        id: 59,
        type: "Reroute",
        pos: [1000, 1400],
        size: [75, 26],
        flags: {},
        order: 22,
        mode: 0,
        inputs: [{
            name: "",
            type: "*",
            link: 292,
            pos: [37.5, 0]
        }],
        outputs: [{
            name: "",
            type: "BASIC_PIPE",
            links: [99],
            slot_index: 0
        }],
        properties: {
            showOutputText: false,
            horizontal: true
        }
    }, {
        id: 57,
        type: "Reroute",
        pos: [2830, 1300],
        size: [75, 26],
        flags: {},
        order: 34,
        mode: 0,
        inputs: [{
            name: "",
            type: "*",
            link: 93
        }],
        outputs: [{
            name: "",
            type: "IMAGE",
            links: [94, 95, 205],
            slot_index: 0
        }],
        properties: {
            showOutputText: false,
            horizontal: false
        },
        color: "#322",
        bgcolor: "#533"
    }, {
        id: 101,
        type: "SEGSPreview",
        pos: [3054, 1926],
        size: {
            "0": 315,
            "1": 102
        },
        flags: {},
        order: 37,
        mode: 0,
        inputs: [{
            name: "segs",
            type: "SEGS",
            link: 208
        }, {
            name: "fallback_image_opt",
            type: "IMAGE",
            link: null
        }],
        outputs: [{
            name: "IMAGE",
            type: "IMAGE",
            links: null,
            shape: 6
        }],
        properties: {
            "Node name for S&R": "SEGSPreview"
        },
        widgets_values: [true, 0.2]
    }, {
        id: 156,
        type: "ImpactSimpleDetectorSEGS_for_AD",
        pos: [2610, 1590],
        size: {
            "0": 319.20001220703125,
            "1": 334
        },
        flags: {},
        order: 35,
        mode: 0,
        inputs: [{
            name: "bbox_detector",
            type: "BBOX_DETECTOR",
            link: 204
        }, {
            name: "image_frames",
            type: "IMAGE",
            link: 205
        }, {
            name: "sam_model_opt",
            type: "SAM_MODEL",
            link: 206
        }, {
            name: "segm_detector_opt",
            type: "SEGM_DETECTOR",
            link: null
        }],
        outputs: [{
            name: "SEGS",
            type: "SEGS",
            links: [207, 208],
            shape: 3
        }],
        properties: {
            "Node name for S&R": "ImpactSimpleDetectorSEGS_for_AD"
        },
        widgets_values: [0.5, 0, 3, 10, 0.5, 0, 0, 0.7, "Pivot SEGS", "Combined mask"]
    }, {
        id: 78,
        type: "SAMLoader",
        pos: [2107, 1783],
        size: {
            "0": 315,
            "1": 82
        },
        flags: {},
        order: 0,
        mode: 0,
        outputs: [{
            name: "SAM_MODEL",
            type: "SAM_MODEL",
            links: [206],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "SAMLoader"
        },
        widgets_values: ["sam_vit_b_01ec64.pth", "AUTO"],
        color: "#322",
        bgcolor: "#533"
    }, {
        id: 49,
        type: "SEGSPaste",
        pos: [3470, 1300],
        size: {
            "0": 300,
            "1": 122
        },
        flags: {},
        order: 38,
        mode: 0,
        inputs: [{
            name: "image",
            type: "IMAGE",
            link: 94
        }, {
            name: "segs",
            type: "SEGS",
            link: 72
        }, {
            name: "ref_image_opt",
            type: "IMAGE",
            link: null
        }],
        outputs: [{
            name: "IMAGE",
            type: "IMAGE",
            links: [132, 262],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "SEGSPaste"
        },
        widgets_values: [5, 255],
        color: "#322",
        bgcolor: "#533"
    }, {
        id: 174,
        type: "Reroute",
        pos: [3842.979183810741, -253.53335906085954],
        size: [75, 26],
        flags: {},
        order: 21,
        mode: 0,
        inputs: [{
            name: "",
            type: "*",
            link: 291
        }],
        outputs: [{
            name: "",
            type: "BASIC_PIPE",
            links: [227],
            slot_index: 0
        }],
        properties: {
            showOutputText: false,
            horizontal: false
        }
    }, {
        id: 54,
        type: "Reroute",
        pos: [2488, 620],
        size: [75, 26],
        flags: {},
        order: 31,
        mode: 0,
        inputs: [{
            name: "",
            type: "*",
            link: 87,
            pos: [37.5, 0]
        }],
        outputs: [{
            name: "",
            type: "IMAGE",
            links: [88],
            slot_index: 0
        }],
        properties: {
            showOutputText: false,
            horizontal: true
        }
    }, {
        id: 151,
        type: "FreeU_V2",
        pos: [576, 311],
        size: {
            "0": 315,
            "1": 130
        },
        flags: {
            collapsed: true
        },
        order: 17,
        mode: 0,
        inputs: [{
            name: "model",
            type: "MODEL",
            link: 418
        }],
        outputs: [{
            name: "MODEL",
            type: "MODEL",
            links: [201],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "FreeU_V2"
        },
        widgets_values: [1.1, 1.2, 0.9, 0.4]
    }, {
        id: 41,
        type: "SEGSDetailerForAnimateDiff",
        pos: [3053, 1315],
        size: {
            "0": 340,
            "1": 570
        },
        flags: {},
        order: 36,
        mode: 0,
        inputs: [{
            name: "image_frames",
            type: "IMAGE",
            link: 95,
            slot_index: 0
        }, {
            name: "segs",
            type: "SEGS",
            link: 207
        }, {
            name: "basic_pipe",
            type: "BASIC_PIPE",
            link: 138,
            slot_index: 2
        }, {
            name: "refiner_basic_pipe_opt",
            type: "BASIC_PIPE",
            link: null
        }],
        outputs: [{
            name: "segs",
            type: "SEGS",
            links: [72],
            shape: 3,
            slot_index: 0
        }, {
            name: "cnet_images",
            type: "IMAGE",
            links: null,
            shape: 6
        }],
        properties: {
            "Node name for S&R": "SEGSDetailerForAnimateDiff"
        },
        widgets_values: [512, false, 512, 574783657760831, "fixed", 20, 8, "euler", "normal", 0.8, 0.2],
        color: "#322",
        bgcolor: "#533"
    }, {
        id: 10,
        type: "VAEDecode",
        pos: [2260, 184],
        size: {
            "0": 210,
            "1": 46
        },
        flags: {},
        order: 28,
        mode: 0,
        inputs: [{
            name: "samples",
            type: "LATENT",
            link: 377
        }, {
            name: "vae",
            type: "VAE",
            link: 85
        }],
        outputs: [{
            name: "IMAGE",
            type: "IMAGE",
            links: [47, 86],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "VAEDecode"
        }
    }, {
        id: 53,
        type: "Reroute",
        pos: [2469, 476],
        size: [75, 26],
        flags: {},
        order: 30,
        mode: 0,
        inputs: [{
            name: "",
            type: "*",
            link: 86
        }],
        outputs: [{
            name: "",
            type: "IMAGE",
            links: [87],
            slot_index: 0
        }],
        properties: {
            showOutputText: false,
            horizontal: false
        }
    }, {
        id: 52,
        type: "FromBasicPipe",
        pos: [1226, 391],
        size: {
            "0": 241.79998779296875,
            "1": 106
        },
        flags: {
            collapsed: true
        },
        order: 20,
        mode: 0,
        inputs: [{
            name: "basic_pipe",
            type: "BASIC_PIPE",
            link: 290,
            slot_index: 0
        }],
        outputs: [{
            name: "model",
            type: "MODEL",
            links: [374, 385],
            shape: 3,
            slot_index: 0
        }, {
            name: "clip",
            type: "CLIP",
            links: null,
            shape: 3
        }, {
            name: "vae",
            type: "VAE",
            links: [85],
            shape: 3,
            slot_index: 2
        }, {
            name: "positive",
            type: "CONDITIONING",
            links: [375],
            shape: 3,
            slot_index: 3
        }, {
            name: "negative",
            type: "CONDITIONING",
            links: [376],
            shape: 3,
            slot_index: 4
        }],
        properties: {
            "Node name for S&R": "FromBasicPipe"
        }
    }, {
        id: 248,
        type: "KSamplerAdvanced",
        pos: [1923, 224],
        size: {
            "0": 315,
            "1": 334
        },
        flags: {},
        order: 27,
        mode: 0,
        inputs: [{
            name: "model",
            type: "MODEL",
            link: 374
        }, {
            name: "positive",
            type: "CONDITIONING",
            link: 375
        }, {
            name: "negative",
            type: "CONDITIONING",
            link: 376
        }, {
            name: "latent_image",
            type: "LATENT",
            link: 384
        }],
        outputs: [{
            name: "LATENT",
            type: "LATENT",
            links: [377],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "KSamplerAdvanced"
        },
        widgets_values: ["disable", 774476516625499, "randomize", 20, 8, "dpmpp_2m", "karras", 0, 20, "disable"]
    }, {
        id: 175,
        type: "FromBasicPipe",
        pos: [4135, -346],
        size: {
            "0": 241.79998779296875,
            "1": 106
        },
        flags: {},
        order: 24,
        mode: 0,
        inputs: [{
            name: "basic_pipe",
            type: "BASIC_PIPE",
            link: 227
        }],
        outputs: [{
            name: "model",
            type: "MODEL",
            links: [228],
            shape: 3,
            slot_index: 0
        }, {
            name: "clip",
            type: "CLIP",
            links: null,
            shape: 3,
            slot_index: 1
        }, {
            name: "vae",
            type: "VAE",
            links: [231],
            shape: 3,
            slot_index: 2
        }, {
            name: "positive",
            type: "CONDITIONING",
            links: [229],
            shape: 3,
            slot_index: 3
        }, {
            name: "negative",
            type: "CONDITIONING",
            links: [230],
            shape: 3,
            slot_index: 4
        }],
        properties: {
            "Node name for S&R": "FromBasicPipe"
        }
    }, {
        id: 157,
        type: "UpscaleModelLoader",
        pos: [4461, -261],
        size: {
            "0": 315,
            "1": 58
        },
        flags: {
            collapsed: true
        },
        order: 1,
        mode: 0,
        outputs: [{
            name: "UPSCALE_MODEL",
            type: "UPSCALE_MODEL",
            links: [413],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "UpscaleModelLoader"
        },
        widgets_values: ["4xUltrasharpV10.pt"]
    }, {
        id: 188,
        type: "Reroute",
        pos: [4454, -192],
        size: [82, 26],
        flags: {},
        order: 40,
        mode: 0,
        inputs: [{
            name: "",
            type: "*",
            link: 262
        }],
        outputs: [{
            name: "IMAGE",
            type: "IMAGE",
            links: [263],
            slot_index: 0
        }],
        properties: {
            showOutputText: true,
            horizontal: false
        }
    }, {
        id: 172,
        type: "UltimateSDUpscale",
        pos: [4725, -738],
        size: {
            "0": 315,
            "1": 614
        },
        flags: {},
        order: 41,
        mode: 0,
        inputs: [{
            name: "image",
            type: "IMAGE",
            link: 263
        }, {
            name: "model",
            type: "MODEL",
            link: 228
        }, {
            name: "positive",
            type: "CONDITIONING",
            link: 229
        }, {
            name: "negative",
            type: "CONDITIONING",
            link: 230
        }, {
            name: "vae",
            type: "VAE",
            link: 231
        }, {
            name: "upscale_model",
            type: "UPSCALE_MODEL",
            link: 413
        }],
        outputs: [{
            name: "IMAGE",
            type: "IMAGE",
            links: [243],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "UltimateSDUpscale"
        },
        widgets_values: [2, 362524318073972, "randomize", 20, 8, "euler", "normal", 0.2, "Linear", 512, 512, 8, 32, "None", 1, 64, 8, 16, true, false]
    }, {
        id: 183,
        type: "ImageCASharpening+",
        pos: [5109, -297],
        size: {
            "0": 315,
            "1": 58
        },
        flags: {
            collapsed: true
        },
        order: 42,
        mode: 0,
        inputs: [{
            name: "image",
            type: "IMAGE",
            link: 243
        }],
        outputs: [{
            name: "IMAGE",
            type: "IMAGE",
            links: [244],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "ImageCASharpening+"
        },
        widgets_values: [0.2]
    }, {
        id: 51,
        type: "VHS_VideoCombine",
        pos: [3540, 13],
        size: [930, 1214],
        flags: {},
        order: 39,
        mode: 0,
        inputs: [{
            name: "images",
            type: "IMAGE",
            link: 132
        }, {
            name: "audio",
            type: "VHS_AUDIO",
            link: null
        }, {
            name: "batch_manager",
            type: "VHS_BatchManager",
            link: null
        }],
        outputs: [{
            name: "Filenames",
            type: "VHS_FILENAMES",
            links: null,
            shape: 3
        }],
        title: "Video Combine - Face Detailed",
        properties: {
            "Node name for S&R": "VHS_VideoCombine"
        },
        widgets_values: {
            frame_rate: 8,
            loop_count: 0,
            filename_prefix: "face_detailer",
            format: "video/h264-mp4",
            pix_fmt: "yuv420p",
            crf: 20,
            save_metadata: true,
            pingpong: false,
            save_output: false,
            videopreview: {
                hidden: false,
                paused: false,
                params: {
                    filename: "face_detailer_00021.mp4",
                    subfolder: "",
                    type: "temp",
                    format: "video/h264-mp4"
                }
            }
        },
        color: "#322",
        bgcolor: "#533"
    }, {
        id: 35,
        type: "VHS_VideoCombine",
        pos: [2526, 24],
        size: [930, 1214],
        flags: {},
        order: 29,
        mode: 0,
        inputs: [{
            name: "images",
            type: "IMAGE",
            link: 47
        }, {
            name: "audio",
            type: "VHS_AUDIO",
            link: null
        }, {
            name: "batch_manager",
            type: "VHS_BatchManager",
            link: null
        }],
        outputs: [{
            name: "Filenames",
            type: "VHS_FILENAMES",
            links: null,
            shape: 3
        }],
        properties: {
            "Node name for S&R": "VHS_VideoCombine"
        },
        widgets_values: {
            frame_rate: 8,
            loop_count: 0,
            filename_prefix: "orig",
            format: "video/h264-mp4",
            pix_fmt: "yuv420p",
            crf: 20,
            save_metadata: true,
            pingpong: false,
            save_output: false,
            videopreview: {
                hidden: false,
                paused: true,
                params: {
                    filename: "orig_00029.mp4",
                    subfolder: "",
                    type: "temp",
                    format: "video/h264-mp4"
                }
            }
        },
        color: "#223",
        bgcolor: "#335"
    }, {
        id: 176,
        type: "VHS_VideoCombine",
        pos: [4633, 29],
        size: [930, 1214],
        flags: {},
        order: 43,
        mode: 0,
        inputs: [{
            name: "images",
            type: "IMAGE",
            link: 244,
            slot_index: 0
        }, {
            name: "audio",
            type: "VHS_AUDIO",
            link: null
        }, {
            name: "batch_manager",
            type: "VHS_BatchManager",
            link: null
        }],
        outputs: [{
            name: "Filenames",
            type: "VHS_FILENAMES",
            links: null,
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "VHS_VideoCombine"
        },
        widgets_values: {
            frame_rate: 8,
            loop_count: 0,
            filename_prefix: "SR",
            format: "video/h265-mp4",
            pix_fmt: "yuv420p10le",
            crf: 22,
            save_metadata: true,
            pingpong: false,
            save_output: true,
            videopreview: {
                hidden: false,
                paused: false,
                params: {
                    filename: "SR_00053.mp4",
                    subfolder: "",
                    type: "output",
                    format: "video/h265-mp4"
                }
            }
        }
    }, {
        id: 204,
        type: "ImpactInt",
        pos: [-315, 1225],
        size: {
            "0": 315,
            "1": 58
        },
        flags: {},
        order: 2,
        mode: 0,
        outputs: [{
            name: "INT",
            type: "INT",
            links: [270, 308, 422],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "ImpactInt"
        },
        widgets_values: [16]
    }, {
        id: 2,
        type: "VAELoader",
        pos: [383, 471],
        size: {
            "0": 385.8948669433594,
            "1": 58
        },
        flags: {
            collapsed: true
        },
        order: 3,
        mode: 0,
        outputs: [{
            name: "VAE",
            type: "VAE",
            links: [96],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "VAELoader"
        },
        widgets_values: ["vae-ft-mse-840000-ema-pruned.safetensors"]
    }, {
        id: 6,
        type: "CLIPTextEncode",
        pos: [319, 553],
        size: {
            "0": 370,
            "1": 110
        },
        flags: {
            collapsed: true
        },
        order: 14,
        mode: 0,
        inputs: [{
            name: "clip",
            type: "CLIP",
            link: 405
        }],
        outputs: [{
            name: "CONDITIONING",
            type: "CONDITIONING",
            links: [275],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "CLIPTextEncode"
        },
        widgets_values: ["(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime), text, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, UnrealisticDream"],
        color: "#322",
        bgcolor: "#533"
    }, {
        id: 42,
        type: "ToBasicPipe",
        pos: [658, 388],
        size: {
            "0": 241.79998779296875,
            "1": 106
        },
        flags: {
            collapsed: false
        },
        order: 18,
        mode: 0,
        inputs: [{
            name: "model",
            type: "MODEL",
            link: 201,
            slot_index: 0
        }, {
            name: "clip",
            type: "CLIP",
            link: 404,
            slot_index: 1
        }, {
            name: "vae",
            type: "VAE",
            link: 96,
            slot_index: 2
        }, {
            name: "positive",
            type: "CONDITIONING",
            link: 373,
            slot_index: 3
        }, {
            name: "negative",
            type: "CONDITIONING",
            link: 275,
            slot_index: 4
        }],
        outputs: [{
            name: "basic_pipe",
            type: "BASIC_PIPE",
            links: [408],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "ToBasicPipe"
        }
    }, {
        id: 217,
        type: "Reroute",
        pos: [971, 390],
        size: [124, 26],
        flags: {},
        order: 19,
        mode: 0,
        inputs: [{
            name: "",
            type: "*",
            link: 408
        }],
        outputs: [{
            name: "BASIC_PIPE",
            type: "BASIC_PIPE",
            links: [290, 291, 292],
            slot_index: 0
        }],
        properties: {
            showOutputText: true,
            horizontal: false
        }
    }, {
        id: 223,
        type: "EmptyLatentImage",
        pos: [729, 767],
        size: {
            "0": 315,
            "1": 130
        },
        flags: {},
        order: 12,
        mode: 0,
        inputs: [{
            name: "batch_size",
            type: "INT",
            link: 308,
            widget: {
                name: "batch_size"
            }
        }],
        outputs: [{
            name: "LATENT",
            type: "LATENT",
            links: [421],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "EmptyLatentImage"
        },
        widgets_values: [512, 512, 1]
    }, {
        id: 253,
        type: "BNK_InjectNoise",
        pos: [1629, 684],
        size: {
            "0": 315,
            "1": 98
        },
        flags: {
            collapsed: false
        },
        order: 26,
        mode: 0,
        inputs: [{
            name: "latents",
            type: "LATENT",
            link: 421
        }, {
            name: "noise",
            type: "LATENT",
            link: 420
        }, {
            name: "mask",
            type: "MASK",
            link: null
        }, {
            name: "strength",
            type: "FLOAT",
            link: 383,
            widget: {
                name: "strength"
            }
        }],
        outputs: [{
            name: "LATENT",
            type: "LATENT",
            links: [384],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "BNK_InjectNoise"
        },
        widgets_values: [1]
    }, {
        id: 32,
        type: "CheckpointLoaderSimple",
        pos: [-1276, 34],
        size: {
            "0": 315,
            "1": 98
        },
        flags: {},
        order: 4,
        mode: 0,
        outputs: [{
            name: "MODEL",
            type: "MODEL",
            links: [415],
            shape: 3,
            slot_index: 0
        }, {
            name: "CLIP",
            type: "CLIP",
            links: [404, 405, 406],
            shape: 3,
            slot_index: 1
        }, {
            name: "VAE",
            type: "VAE",
            links: [],
            shape: 3
        }],
        properties: {
            "Node name for S&R": "CheckpointLoaderSimple"
        },
        widgets_values: ["realisticVision_v51.safetensors"]
    }, {
        id: 102,
        type: "ADE_AnimateDiffUniformContextOptions",
        pos: [-335, -8],
        size: {
            "0": 315,
            "1": 270
        },
        flags: {
            collapsed: true
        },
        order: 5,
        mode: 0,
        inputs: [{
            name: "prev_context",
            type: "CONTEXT_OPTIONS",
            link: null
        }, {
            name: "view_opts",
            type: "VIEW_OPTS",
            link: null
        }],
        outputs: [{
            name: "CONTEXT_OPTIONS",
            type: "CONTEXT_OPTIONS",
            links: [416],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "ADE_AnimateDiffUniformContextOptions"
        },
        widgets_values: [16, 1, 2, "uniform", false, "flat", false, 0, 1]
    }, {
        id: 254,
        type: "BNK_GetSigma",
        pos: [1362, 913],
        size: {
            "0": 315,
            "1": 154
        },
        flags: {},
        order: 23,
        mode: 0,
        inputs: [{
            name: "model",
            type: "MODEL",
            link: 385
        }],
        outputs: [{
            name: "FLOAT",
            type: "FLOAT",
            links: [383],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "BNK_GetSigma"
        },
        widgets_values: ["dpmpp_2m", "karras", 20, 0, 20]
    }, {
        id: 75,
        type: "UltralyticsDetectorProvider",
        pos: [2088, 1625],
        size: {
            "0": 315,
            "1": 78
        },
        flags: {},
        order: 6,
        mode: 0,
        outputs: [{
            name: "BBOX_DETECTOR",
            type: "BBOX_DETECTOR",
            links: [204],
            shape: 3,
            slot_index: 0
        }, {
            name: "SEGM_DETECTOR",
            type: "SEGM_DETECTOR",
            links: [],
            shape: 3,
            slot_index: 1
        }],
        properties: {
            "Node name for S&R": "UltralyticsDetectorProvider"
        },
        widgets_values: ["bbox/face_yolov8m.pt"],
        color: "#322",
        bgcolor: "#533"
    }, {
        id: 264,
        type: "Note",
        pos: [620, 1218],
        size: {
            "0": 534.8900146484375,
            "1": 72.82633972167969
        },
        flags: {},
        order: 7,
        mode: 0,
        properties: {
            text: ""
        },
        widgets_values: ["Magic Album - 3D Gaussian Noise\n\nInitialize the frames by 3D Gaussian noise with covariance specified by cov_factor."],
        color: "#432",
        bgcolor: "#653"
    }, {
        id: 265,
        type: "Note",
        pos: [2426, 1444],
        size: {
            "0": 583.965576171875,
            "1": 78.52656555175781
        },
        flags: {},
        order: 8,
        mode: 0,
        properties: {
            text: ""
        },
        widgets_values: ["Magic Album - Face Detailer\n\nApply Identity-specific VCD on the cropped frames of face to improve likeness. This modules is important whenever the face is small in the generated video."],
        color: "#432",
        bgcolor: "#653"
    }, {
        id: 266,
        type: "Note",
        pos: [4238, -694],
        size: {
            "0": 359.29656982421875,
            "1": 62.93407440185547
        },
        flags: {},
        order: 9,
        mode: 0,
        properties: {
            text: ""
        },
        widgets_values: ["Magic Album - SR module\nApply Identity-specific VCD with super resolution model."],
        color: "#432",
        bgcolor: "#653"
    }, {
        id: 263,
        type: "Note",
        pos: [-423, 1338],
        size: {
            "0": 504.50054931640625,
            "1": 130.17208862304688
        },
        flags: {},
        order: 10,
        mode: 0,
        properties: {
            text: ""
        },
        widgets_values: ["Magic Album - Prompt Travel\nUse Batch Prompt Schedule to assign different prompts for different range of frames.\n\nFor example, with the SCG Emotions Pack from (https://civitai.com/models/8860), the user can change the expression of the character by typing:\n\n\"0\":\"embedding:emotion-grin\",\n\"8\":\"embedding:emotion-smile\"\n\n"],
        color: "#432",
        bgcolor: "#653"
    }, {
        id: 60,
        type: "Reroute",
        pos: [1120, 1450],
        size: [75, 26],
        flags: {},
        order: 25,
        mode: 0,
        inputs: [{
            name: "",
            type: "*",
            link: 99
        }],
        outputs: [{
            name: "",
            type: "BASIC_PIPE",
            links: [138],
            slot_index: 0
        }],
        properties: {
            showOutputText: false,
            horizontal: false
        }
    }, {
        id: 262,
        type: "MagicAlbum3DGaussianNoise",
        pos: [736, 988],
        size: {
            "0": 336,
            "1": 178
        },
        flags: {},
        order: 13,
        mode: 0,
        inputs: [{
            name: "batch_size",
            type: "INT",
            link: 422,
            widget: {
                name: "batch_size"
            }
        }],
        outputs: [{
            name: "LATENT",
            type: "LATENT",
            links: [420],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "MagicAlbum3DGaussianNoise"
        },
        widgets_values: [512, 512, 1, 674280267919247, "randomize", 0.15]
    }, {
        id: 261,
        type: "ADE_AnimateDiffLoaderWithContext",
        pos: [311, 85],
        size: {
            "0": 315,
            "1": 230
        },
        flags: {
            collapsed: true
        },
        order: 16,
        mode: 0,
        inputs: [{
            name: "model",
            type: "MODEL",
            link: 415
        }, {
            name: "context_options",
            type: "CONTEXT_OPTIONS",
            link: 416
        }, {
            name: "motion_lora",
            type: "MOTION_LORA",
            link: 417
        }, {
            name: "ad_settings",
            type: "AD_SETTINGS",
            link: null
        }, {
            name: "sample_settings",
            type: "SAMPLE_SETTINGS",
            link: null
        }, {
            name: "ad_keyframes",
            type: "AD_KEYFRAMES",
            link: null
        }],
        outputs: [{
            name: "MODEL",
            type: "MODEL",
            links: [418],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "ADE_AnimateDiffLoaderWithContext"
        },
        widgets_values: ["mm_sd_v15_v2.ckpt", "autoselect", 1, true]
    }, {
        id: 202,
        type: "BatchPromptSchedule",
        pos: [148, 1176],
        size: [379.556396484375, 501.3092041015625],
        flags: {},
        order: 15,
        mode: 0,
        inputs: [{
            name: "clip",
            type: "CLIP",
            link: 406
        }, {
            name: "max_frames",
            type: "INT",
            link: 270,
            widget: {
                name: "max_frames"
            }
        }],
        outputs: [{
            name: "POS",
            type: "CONDITIONING",
            links: [373],
            shape: 3,
            slot_index: 0
        }, {
            name: "NEG",
            type: "CONDITIONING",
            links: [],
            shape: 3,
            slot_index: 1
        }],
        properties: {
            "Node name for S&R": "BatchPromptSchedule"
        },
        widgets_values: ["\"0\":\"\",\n\"8\":\"\"", 120, false, "a photo of embedding:altman-gstep-200 man in superman costume in the outer space, stars in the background", "", 0, 0, 0, 0, 0]
    }, {
        id: 196,
        type: "ADE_AnimateDiffLoRALoader",
        pos: [-375, -182],
        size: {
            "0": 355.20001220703125,
            "1": 82
        },
        flags: {},
        order: 11,
        mode: 0,
        inputs: [{
            name: "prev_motion_lora",
            type: "MOTION_LORA",
            link: null
        }],
        outputs: [{
            name: "MOTION_LORA",
            type: "MOTION_LORA",
            links: [417],
            shape: 3,
            slot_index: 0
        }],
        properties: {
            "Node name for S&R": "ADE_AnimateDiffLoRALoader"
        },
        widgets_values: ["v2_lora_ZoomIn.ckpt", 0.6]
    }],
    links: [
        [47, 10, 0, 35, 0, "IMAGE"],
        [72, 41, 0, 49, 1, "SEGS"],
        [85, 52, 2, 10, 1, "VAE"],
        [86, 10, 0, 53, 0, "*"],
        [87, 53, 0, 54, 0, "*"],
        [88, 54, 0, 55, 0, "*"],
        [89, 55, 0, 56, 0, "*"],
        [93, 56, 0, 57, 0, "*"],
        [94, 57, 0, 49, 0, "IMAGE"],
        [95, 57, 0, 41, 0, "IMAGE"],
        [96, 2, 0, 42, 2, "VAE"],
        [99, 59, 0, 60, 0, "*"],
        [132, 49, 0, 51, 0, "IMAGE"],
        [138, 60, 0, 41, 2, "BASIC_PIPE"],
        [201, 151, 0, 42, 0, "MODEL"],
        [204, 75, 0, 156, 0, "BBOX_DETECTOR"],
        [205, 57, 0, 156, 1, "IMAGE"],
        [206, 78, 0, 156, 2, "SAM_MODEL"],
        [207, 156, 0, 41, 1, "SEGS"],
        [208, 156, 0, 101, 0, "SEGS"],
        [227, 174, 0, 175, 0, "BASIC_PIPE"],
        [228, 175, 0, 172, 1, "MODEL"],
        [229, 175, 3, 172, 2, "CONDITIONING"],
        [230, 175, 4, 172, 3, "CONDITIONING"],
        [231, 175, 2, 172, 4, "VAE"],
        [243, 172, 0, 183, 0, "IMAGE"],
        [244, 183, 0, 176, 0, "IMAGE"],
        [262, 49, 0, 188, 0, "*"],
        [263, 188, 0, 172, 0, "IMAGE"],
        [270, 204, 0, 202, 1, "INT"],
        [275, 6, 0, 42, 4, "CONDITIONING"],
        [290, 217, 0, 52, 0, "BASIC_PIPE"],
        [291, 217, 0, 174, 0, "*"],
        [292, 217, 0, 59, 0, "*"],
        [308, 204, 0, 223, 0, "INT"],
        [373, 202, 0, 42, 3, "CONDITIONING"],
        [374, 52, 0, 248, 0, "MODEL"],
        [375, 52, 3, 248, 1, "CONDITIONING"],
        [376, 52, 4, 248, 2, "CONDITIONING"],
        [377, 248, 0, 10, 0, "LATENT"],
        [383, 254, 0, 253, 3, "FLOAT"],
        [384, 253, 0, 248, 3, "LATENT"],
        [385, 52, 0, 254, 0, "MODEL"],
        [404, 32, 1, 42, 1, "CLIP"],
        [405, 32, 1, 6, 0, "CLIP"],
        [406, 32, 1, 202, 0, "CLIP"],
        [408, 42, 0, 217, 0, "*"],
        [413, 157, 0, 172, 5, "UPSCALE_MODEL"],
        [415, 32, 0, 261, 0, "MODEL"],
        [416, 102, 0, 261, 1, "CONTEXT_OPTIONS"],
        [417, 196, 0, 261, 2, "MOTION_LORA"],
        [418, 261, 0, 151, 0, "MODEL"],
        [420, 262, 0, 253, 1, "LATENT"],
        [421, 223, 0, 253, 0, "LATENT"],
        [422, 204, 0, 262, 0, "INT"]
    ],
    groups: [],
    config: {},
    extra: {},
    version: 0.4
};