from pathlib import Path

import setuptools

this_directory = Path(__file__).parent
long_description = (this_directory / "README.md").read_text()

setuptools.setup(
    name="streamlit-speed-dial",
    version="0.0.3",
    author="Moslem gannoun",
    author_email="moslemgannoun@gmail.com",
    description="Streamlit component that allows you to make speed dial ",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/BlueGob/streamlit-speed-dial",
    packages=setuptools.find_packages(),
    include_package_data=True,
    classifiers=[],
    python_requires=">=3.7",
    install_requires=[
        "streamlit >= 0.63",
    ],
)
